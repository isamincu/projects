(function($) {
	$(".tab").on('click', function(e) {

		var $clickedTab = $(e.currentTarget);

		if (!$clickedTab.hasClass("active")) {
			var paneId = $clickedTab.attr("data-target");

			$(".tab.active").removeClass("active");
			$(".pane.active").removeClass("active");
			$clickedTab.addClass("active");
			$(paneId).addClass("active");
		}
	});

	$(".select-amount").on("click", function(e) {
		$targetBox = $(".main-select h1");
		$clickedBox = $(e.currentTarget);

		if (!$clickedBox.hasClass("active")) {
			$(".select-amount.active").removeClass("active");
			$clickedBox.addClass("active");

			if (!$clickedBox.hasClass("other")) {
				$targetBox.text($clickedBox.text() + ".00");
			} else {
				var sum = prompt("Please enter sum");
				
				// while (parseInt(sum) === NaN) {
				// 	sum = prompt("Invalid value. Please enter a valid sum");
				// }

				while (isNaN(sum) === true) {
					sum = prompt("Invalid value. Please enter a valid sum");
				}
				
				//convert it to number with parseFloat, add 2 decimals
				sum = sum !== null ? "$" + parseFloat(sum).toFixed(2) : "";
				$targetBox.text(sum);
			}
		}
	});

	$(".gender").on("focus", function() {
		//disable previous event listener for 'keypress', if one exists, then apply a new event listener
		$(this).off("keypress").on("keypress", function(e) {
			var pressedKey = e.keyCode || e.which;
			// check if something other than 'm' or 'f' was pressed and if the input already contains a letter
			if ((pressedKey !== 109 && pressedKey !== 102) || $(this).val().length > 0) {
				e.preventDefault();
			}
		});
	});
})(jQuery);
