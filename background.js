async function summerizeTab(tab) {
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3.2",
      prompt: `Summerize this website ${tab.url}`,
      stream: false
    }),
  });

  const data = await response.json();
  return {title:tab.title,content:data['response'],tabUrl:tab.url}
}

async function summerizeall() {
    const tabQuery=await chrome.tabs.query({currentWindow: true});
    const pageUrl=chrome.runtime.getURL('summaries.html')
    chrome.tabs.create({url:pageUrl})
    for (const tab of tabQuery) {
        try {
            const data =await summerizeTab(tab)
            chrome.runtime.sendMessage({type:"send data",content_data:data})
        } catch (error) {
           console.log(error);
        }
    }
}

async function summerizeOne() {
    const tabQuery=await chrome.tabs.query({currentWindow: true,active:true});
    const pageUrl=chrome.runtime.getURL('summaries.html')
    chrome.tabs.create({url:pageUrl})
    for (const tab of tabQuery) {
        try {
            const data =await summerizeTab(tab)
            chrome.runtime.sendMessage({type:"send data",content_data:data})
        } catch (error) {
           console.log(error);
        }
    }
}




chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type==="summerise-one") {
        summerizeOne()
    }
    if (message.type==="summerise-all") {
        summerizeall()
    }
})