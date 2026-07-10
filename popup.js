async function checkCurrentTab() {
    const tab=await chrome.tabs.query({active: true,currentWindow: true});
    let currentTab=document.getElementById("tab-title")
    currentTab.textContent=tab[0].title
}
checkCurrentTab()

const summerizeCurrent=document.getElementById('summarize-current') 
summerizeCurrent.addEventListener('click', async () => {
    chrome.runtime.sendMessage({type:"summerise-one"})
})

const summerizeAll=document.getElementById('summarize-all') 
summerizeAll.addEventListener('click', async () => {
    chrome.runtime.sendMessage({type:"summerise-all"})
})
