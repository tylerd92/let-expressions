/*
 * main.js
 * Rich Simpson
 * August 5, 2015
 *
 * This code implements a mastery-based exercise on graph
 * theory for integration with Smart Sparrow.
 *
 * This is our view - The V in MVC
 */


/*
 * This object handles drawing the interface on the screen. Mostly
 * this involves drawing the actual graph and clearing out the
 * text field for the user's answer
 */
function SimView(_controller) {
    // keep a link to the controller
    this.controller = _controller;
    // Only set up the controls once
    this.setupControls();
    // create the question bank view - where questions and answer history are
    // displayed
    this.questionBankView = new QuestionBankView(this);
}


SimView.prototype.setupControls = function() {
    $("#btnStart").click(function() {
        // finish initializing the app
        simController.initializeController();
        // disable start button
        $("#btnStart").prop('disabled', true);
        // enable submit button
        $("#btnSubmit").prop('disabled', false);
    });

        // add event handler for submit button
    $("#btnSubmit").click(function() {

        // Checks if any of the checkboxes were checked, if not sends an alert to the browser
        var checkboxes = $("input[type='checkbox']");

        checkboxes.click(function() {
            if (!checkboxes.is(":checked")) {
                alert("Please check on one of the answers below.")
            };
        });

        // Checks if the first checkbox was checked
        if ($("#answer1").attr('checked')) {
            var studentAnswer = $("answer1").val();
            var rightAnswer = simController.simModel.questionBank.checkAnswer(studentAnswer);
            // if they got the right answer
            if (rightAnswer) {
                // give them feedback
                $("#txtFeedback").html("Right. The answer is " + studentAnswer);
            } else {
                // give them feedback
                $("#txtFeedback").html("That is incorrect. The correct answer is " + simController.simModel.questionBank.answers[0]);
            }
        }
        // Checks if the second checkbox was checked
        else if ($("#answer2").attr('checked')) {
            var studentAnswer = $("answer2").val();
            var rightAnswer = simController.simModel.questionBank.checkAnswer(studentAnswer);

            // if they got the right answer
            if (rightAnswer) {
                // give them feedback
                $("#txtFeedback").html("Right. The answer is " + studentAnswer);
            } else {
                // give them feedback
                $("#txtFeedback").html("That is incorrect. The correct answer is " + simController.simModel.questionBank.answers[0]);
            }
        }
        // Checks if the third checkbox was checked
        else if ($("#answer3").attr('checked')) {
            var studentAnswer = $("answer3").val();
            var rightAnswer = simController.simModel.questionBank.checkAnswer(studentAnswer);

            // if they got the right answer
            if (rightAnswer) {
                // give them feedback
                $("#txtFeedback").html("Right. The answer is " + studentAnswer);
            } else {
                // give them feedback
                $("#txtFeedback").html("That is incorrect. The correct answer is " + simController.simModel.questionBank.answers[0]);
            }
        }
        // Checks if the fourth checkbox was checked
        else {
            var studentAnswer = $("answer4").val();
            var rightAnswer = simController.simModel.questionBank.checkAnswer(studentAnswer);

            // if they got the right answer
            if (rightAnswer) {
                // give them feedback
                $("#txtFeedback").html("Right. The answer is " + studentAnswer);
            } else {
                // give them feedback
                $("#txtFeedback").html("That is incorrect. The correct answer is " + simController.simModel.questionBank.answers[0]);
            }
        }

        // disable submit button
        $("#btnSubmit").prop('disabled', true);
        // disable text field where the user enters an answer
        $("#txtAnswer").prop('disabled', true);
    });
    // call the submit button click-handler if the user hits the enter key
    $('#txtAnswer').keypress(function(e) {
        if (e.which == 13) { //Enter key pressed
            $('#btnSubmit').click(); //Trigger search button click event
        }
    });
    

    
}