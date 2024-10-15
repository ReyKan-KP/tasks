const btn = document.querySelector(".btn");
const summary = document.querySelector(".summary");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const input = document.querySelector("#url").value;

  if (!input) {
    summary.innerText = "Please enter a valid URL.";
    return;
  }

  summary.innerText = "Please be patient, your summary is on the way...";

  const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(
    input
  )}&lang=en&engine=2`;

  fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "944fdb4ac4mshed5b3893a079348p14df65jsn6d60f5a48511",
      "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Log the full response
      if (data?.summary) {
        summary.innerText = data.summary;
      } else {
        summary.innerText = "Summary could not be generated.";
      }
    })
    .catch((error) => {
      summary.innerText = "An error occurred while fetching the summary.";
      console.error("Error:", error);
    });

});
