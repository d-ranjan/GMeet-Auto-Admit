let hadError = false;

function clickAdmit() {
    try {
        let possibleAdmitButtons = document.querySelectorAll('div[role="dialog"] div[role="button"]');
        for (let possibleAdmitButton of possibleAdmitButtons) {
            let buttonText = possibleAdmitButton.textContent.trim()
                .toLowerCase();
            if (buttonText === 'admit' || 
                buttonText === 'view all' || 
                buttonText === 'admit all') 
            {
                possibleAdmitButton.click();
                break;
            }
        }
    } catch (err) {
        if (!hadError) {
            console.log("GMeet Auto Admit Error: ");
            console.log(err.message);
            alert(`GMeet Error\n${err.message}`);
            hadError = true;
        }
    }
}

function isSwitchedOn() {
    chrome.storage.sync.get('isWorking', function(data) {
        if (data.isWorking !== false) {
            clickAdmit();
        }
    });
}
setInterval(isSwitchedOn, 500);