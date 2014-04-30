window.onload = init;
function init() {
$("#convertBtn").on("click", convertMe);
	$("#clearBtn_convert").on("click", clearConvert);
	$("#scaleBtn").on("click", scaleMe);
	$("#clearBtn_scale").on("click", clearScale);
	
	function clearConvert() {
		console.log("   function -> clearConvert()");
		$(".gridVolume").html("-");
		$(".gridWeight").html("-");
		}
	
	function clearScale() {
		console.log("   function -> clearScale()");
		for ( i=0; i<7; i++) {
			$("#newScale"+[i]).html("-");
			}
	}
	
	function scaleMe(e) {
		console.log("   function -> scaleMe()");
		e.preventDefault();
		var origServes = $("#origServes").val();
		var newServes = $("#newServes").val();
		var scale0 = $("#scale0").val();
		var scale1 = $("#scale1").val();
		var scale2 = $("#scale2").val();
		var scale3 = $("#scale3").val();
		var scale4 = $("#scale4").val();
		var scale5 = $("#scale5").val();
		var scale6 = $("#scale6").val();
		var scales = [scale0, scale1, scale2, scale3, scale4, scale5, scale6];
		var newScale = [];
		var cFactor;
		
		if (!origServes || origServes < 0 || isNaN(origServes)) {
			alert("Original servings is not a valid amount");
		}
		else if (!newServes || newServes < 0 || isNaN(newServes)) {
			alert("New servings is not a valid amount");
		}
		else {
			cFactor = newServes / origServes;
			console.log("   data -> cFactor = " +cFactor);
			for ( i=0; i<5; i++) {
				newScale[i] = (scales[i] * cFactor).toFixed(3);
				$("#newScale"+[i]).html(newScale[i]);
				console.log("   data -> scales["+i+"] = "+scales[i]+" , newScale["+i+"] = " +newScale[i]);
			}
		cFactor = 0;
		newScale = [];
		}	
	}
	
	function convertMe(e) {
		console.log("   function -> convertMe()");
		e.preventDefault();
		
		//Variables
		var origAmount = $("#origAmount").val();
		var origUnit = $("#origUnit").val();
		console.log("   data -> origUnit = " +origUnit);
		
		var dash = {
			dash: 1,
			floz: 0.021,
			tsp: 0.125,
			Tbl: 0.042,
			cup: 0.0021,
			pint: 0.0013,
			litre: 0.0006,
			quart: 0.00065,
			gallon: 0.0002
		}
		
		var floz = {
			dash: 48,
			floz: 1,
			tsp: 6,
			Tbl: 2,
			cup: 0.125,
			pint: 0.0625,
			litre: 0.0297,
			quart: 0.03125,
			gallon: 0.0078
			};

		var tsp = {
			dash: 8,
			floz: 0.1667,
			tsp: 1,
			Tbl: 0.3333,
			cup: 0.021,
			pint: 0.010,
			litre: 0.0049,
			quart: 0.0052,
			gallon: 0.0013
			};
			
		var Tbl = {
			dash: 24,
			floz: 0.5,
			tsp: 3,
			Tbl: 1,
			cup: 0.0625,
			pint: 0.03125,
			litre: 0.015,
			quart: 0.0156,
			gallon: 0.0039
			};
			
		var cup = {
			dash: 384,
			floz: 8,
			tsp: 48,
			Tbl: 16,
			cup: 1,
			pint: 0.5,
			litre: 0.2366,
			quart: 0.25,
			gallon: 0.0625
			};
			
		var pint = {
			dash: 768,
			floz: 16,
			tsp: 96,
			Tbl: 32,
			cup: 2,
			pint: 1,
			litre: 0.4732,
			quart: 0.5,
			gallon: 0.125
			};
			
		var quart = {
			dash: 1536,
			floz: 32,
			tsp: 192,
			Tbl: 64,
			cup: 4,
			pint: 2,
			litre: 0.9464,
			quart: 1,
			gallon: 0.25
			};
			
		var gallon = {
			dash: 6144,
			floz: 128,
			tsp: 768,
			Tbl: 256,
			cup: 16,
			pint: 8,
			litre: 3.7854,
			quart: 4,
			gallon: 1
			};
			
		var litre = {
			dash: 1623.01,
			floz: 33.814,
			tsp: 202.8841,
			Tbl: 67.628,
			cup: 4.227,
			pint: 2.113,
			litre: 1,
			quart: 1.057,
			gallon: 0.2642
			};
			
		var gram = {
			oz: 0.0353,
			lb: 0.002205,
			gram: 1
			};
			
		var oz = {
			gram: 28.3495,
			oz: 1,
			lb: 0.0625
		}
			
		var lb = {
			oz: 16,
			lb: 1,
			gram: 453.5923
			};
		
		if (!origAmount || origAmount < 0 || isNaN(origAmount)) {
			alert("That doesn't appear to be a valid Amount");
			}
		
		else if (origUnit == "dash") {
			$("#gridDash").html((origAmount * dash.dash).toFixed(2));
			$("#gridFloz").html((origAmount * dash.floz).toFixed(2));
			$("#gridTsp").html((origAmount * dash.tsp).toFixed(2));
			$("#gridTbl").html((origAmount * dash.Tbl).toFixed(2));
			$("#gridCup").html((origAmount * dash.cup).toFixed(2));
			$("#gridPint").html((origAmount * dash.pint).toFixed(2));
			$("#gridLitre").html((origAmount * dash.litre).toFixed(2));
			$("#gridQuart").html((origAmount * dash.quart).toFixed(2));
			$("#gridGallon").html((origAmount * dash.gallon).toFixed(2));
			$(".gridWeight").html("-");
		}
		
		else if (origUnit == "floz") {
			$("#gridDash").html((origAmount * floz.dash).toFixed(2));
			$("#gridFloz").html((origAmount * floz.floz).toFixed(2));
			$("#gridTsp").html((origAmount * floz.tsp).toFixed(2));
			$("#gridTbl").html((origAmount * floz.Tbl).toFixed(2));
			$("#gridCup").html((origAmount * floz.cup).toFixed(2));
			$("#gridPint").html((origAmount * floz.pint).toFixed(2));
			$("#gridLitre").html((origAmount * floz.litre).toFixed(2));
			$("#gridQuart").html((origAmount * floz.quart).toFixed(2));
			$("#gridGallon").html((origAmount * floz.gallon).toFixed(2));
			$(".gridWeight").html("-");
		} 
		else if (origUnit == "tsp" ) {
			$("#gridDash").html((origAmount * tsp.dash).toFixed(2));
			$("#gridFloz").html((origAmount * tsp.floz).toFixed(2));
			$("#gridTsp").html((origAmount * tsp.tsp).toFixed(2));
			$("#gridTbl").html((origAmount * tsp.Tbl).toFixed(2));
			$("#gridCup").html((origAmount * tsp.cup).toFixed(2));
			$("#gridPint").html((origAmount * tsp.pint).toFixed(2));
			$("#gridLitre").html((origAmount * tsp.litre).toFixed(2));
			$("#gridQuart").html((origAmount * tsp.quart).toFixed(2));
			$("#gridGallon").html((origAmount * tsp.gallon).toFixed(2));
			$(".gridWeight").html("-");
		}
		
		else if (origUnit == "Tbl" ) {
			$("#gridDash").html((origAmount * Tbl.dash).toFixed(2));
			$("#gridFloz").html((origAmount * Tbl.floz).toFixed(2));
			$("#gridTsp").html((origAmount * Tbl.tsp).toFixed(2));
			$("#gridTbl").html((origAmount * Tbl.Tbl).toFixed(2));
			$("#gridCup").html((origAmount * Tbl.cup).toFixed(2));
			$("#gridPint").html((origAmount * Tbl.pint).toFixed(2));
			$("#gridLitre").html((origAmount * Tbl.litre).toFixed(2));
			$("#gridQuart").html((origAmount * Tbl.quart).toFixed(2));
			$("#gridGallon").html((origAmount * Tbl.gallon).toFixed(2));
			$(".gridWeight").html("-");
		}

		else if (origUnit == "cup" ) {
			$("#gridDash").html((origAmount * cup.dash).toFixed(2));
			$("#gridFloz").html((origAmount * cup.floz).toFixed(2));
			$("#gridTsp").html((origAmount * cup.tsp).toFixed(2));
			$("#gridTbl").html((origAmount * cup.Tbl).toFixed(2));
			$("#gridCup").html((origAmount * cup.cup).toFixed(2));
			$("#gridPint").html((origAmount * cup.pint).toFixed(2));
			$("#gridLitre").html((origAmount * cup.litre).toFixed(2));
			$("#gridQuart").html((origAmount * cup.quart).toFixed(2));
			$("#gridGallon").html((origAmount * cup.gallon).toFixed(2));
			$(".gridWeight").html("-");
		}
		
		else if (origUnit == "pint" ) {
			$("#gridDash").html((origAmount * pint.dash).toFixed(2));
			$("#gridFloz").html((origAmount * pint.floz).toFixed(2));
			$("#gridTsp").html((origAmount * pint.tsp).toFixed(2));
			$("#gridTbl").html((origAmount * pint.Tbl).toFixed(2));
			$("#gridCup").html((origAmount * pint.cup).toFixed(2));
			$("#gridPint").html((origAmount * pint.pint).toFixed(2));
			$("#gridLitre").html((origAmount * pint.litre).toFixed(2));
			$("#gridQuart").html((origAmount * pint.quart).toFixed(2));
			$("#gridGallon").html((origAmount * pint.gallon).toFixed(2));
			$(".gridWeight").html("-");
		}
		
		else if (origUnit == "quart" ) {
			$("#gridDash").html((origAmount * quart.dash).toFixed(2));
			$("#gridOz").html((origAmount * quart.floz).toFixed(2));
			$("#gridTsp").html((origAmount * quart.tsp).toFixed(2));
			$("#gridTbl").html((origAmount * quart.Tbl).toFixed(2));
			$("#gridCup").html((origAmount * quart.cup).toFixed(2));
			$("#gridPint").html((origAmount * quart.pint).toFixed(2));
			$("#gridLitre").html((origAmount * quart.litre).toFixed(2));
			$("#gridQuart").html((origAmount * quart.quart).toFixed(2));
			$("#gridGallon").html((origAmount * quart.gallon).toFixed(2));
			$(".gridWeight").html("-");
		}
		
		else if (origUnit == "litre" ) {
			$("#gridDash").html((origAmount * litre.dash).toFixed(2));
			$("#gridOz").html((origAmount * litre.floz).toFixed(2));
			$("#gridTsp").html((origAmount * litre.tsp).toFixed(2));
			$("#gridTbl").html((origAmount * litre.Tbl).toFixed(2));
			$("#gridCup").html((origAmount * litre.cup).toFixed(2));
			$("#gridPint").html((origAmount * litre.pint).toFixed(2));
			$("#gridLitre").html((origAmount * litre.litre).toFixed(2));
			$("#gridQuart").html((origAmount * litre.quart).toFixed(2));
			$("#gridGallon").html((origAmount * litre.gallon).toFixed(2));
			$(".gridWeight").html("-");
		}
		
		else if (origUnit == "gallon" ) {
			$("#gridDash").html((origAmount * gallon.dash).toFixed(2));
			$("#gridFloz").html((origAmount * gallon.floz).toFixed(2));
			$("#gridTsp").html((origAmount * gallon.tsp).toFixed(2));
			$("#gridTbl").html((origAmount * gallon.Tbl).toFixed(2));
			$("#gridCup").html((origAmount * gallon.cup).toFixed(2));
			$("#gridPint").html((origAmount * gallon.pint).toFixed(2));
			$("#gridLitre").html((origAmount * gallon.litre).toFixed(2));
			$("#gridQuart").html((origAmount * gallon.quart).toFixed(2));
			$("#gridGallon").html((origAmount * gallon.gallon).toFixed(2));
			$(".gridWeight").html("-");
		}
		
		else if (origUnit == "gram" ) {
			$(".gridVolume").html("-");
			$("#gridGram").html((origAmount * gram.gram).toFixed(2));
			$("#gridOz").html((origAmount * gram.oz).toFixed(2));
			$("#gridLb").html((origAmount * gram.lb).toFixed(2));
		}
		
		else if (origUnit == "oz" ) {
			$(".gridVolume").html("-");
			$("#gridGram").html((origAmount * oz.gram).toFixed(2));
			$("#gridOz").html((origAmount * oz.oz).toFixed(2));
			$("#gridLb").html((origAmount * oz.lb).toFixed(2));
		}
		
		else if (origUnit == "lb" ) {
			$(".gridVolume").html("-");
			$("#gridGram").html((origAmount * lb.gram).toFixed(2));
			$("#gridOz").html((origAmount * lb.oz).toFixed(2));
			$("#gridLb").html((origAmount * lb.lb).toFixed(2));
		}
		
		else {
			alert("Please enter a valid number");
			clearConvert;
			}
	}
}