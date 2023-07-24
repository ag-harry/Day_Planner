$(function () {
  // Display the current date in the header of the page
  const currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(currentDate);

  // Apply the past, present, or future class to each time block by comparing the id to the current hour
  const currentHour = dayjs().hour();
  $(".time-block").each(function () {
    const hour = parseInt($(this).attr("id").split("-")[1]);
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Get any user input that was saved in localStorage and set the values of the corresponding textarea elements
  $(".description").each(function () {
    const hour = $(this).parent().attr("id");
    const text = localStorage.getItem(hour);
    if (text) {
      $(this).val(text);
    }
  });

  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    // Get the "hour-x" id of the time-block containing the button that was clicked
    const hour = $(this).parent().attr("id");
    // Save the user input in local storage
    const text = $(this).siblings(".description").val();
    localStorage.setItem(hour, text);
  });
});