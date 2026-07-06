async function checkOpenTabs() {
    const tabs = await chrome.tabs.query({currentWindow: true});

    console.log("Number of tabs:", tabs.length);

    for (const tab of tabs) {
        console.log("Title:", tab.title);
        console.log("URL:", tab.url);
        console.log("ID:", tab.id);
    }
}

checkOpenTabs();