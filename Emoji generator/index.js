const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

const url = "https://emoji-api.com/emojis?access_key=7a7d8c89a5f39abb640309e7e3cceb596835aef5"

async function getEmoji() {
  try {
    const url = "https://emoji-api.com/emojis?access_key=7a7d8c89a5f39abb640309e7e3cceb596835aef5"
    console.log("About to fetch:", url);

    const response = await fetch(url);
    console.log("Fetch returned. HTTP status:", response.status, response.statusText);
    console.log("Response headers:", [...response.headers.entries()]);

    // Try to read raw text if json() might fail
    const text = await response.clone().text(); // clone so we can attempt json after if needed
    console.log("Raw response text (first 500 chars):", text.slice(0, 500));

    // If response is not ok, show the text and throw
    if (!response.ok) {
      console.error("Server returned error body:", text);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse JSON
    let data;
    try {
      data = await response.json();
    } catch (jsonErr) {
      console.error("Failed to parse JSON:", jsonErr);
      // already printed raw text above — that'll show the server response
      throw jsonErr;
    }

    console.log("API data (type):", Array.isArray(data) ? "array" : typeof data, "length:", data.length ?? "n/a");
    // now push safely
    for (let i = 0; i < data.length && i < 1500; i++) {
      emoji.push({
        emojiName: data[i].character,
        emojiCode: data[i].unicodeName
      });
    }
    console.log("Emoji array:", emoji);
  } catch (err) {
    console.error("getEmoji() failed:", err);
  }
}

getEmoji(); // when the page is refresh every time call this function



btnEl.addEventListener("click", function(e){
   const randomNum = Math.floor(Math.random() * emoji.length);
   btnEl.innerText = emoji[randomNum].emojiName;
   emojiNameEl.innerText = emoji[randomNum].emojiCode;
})