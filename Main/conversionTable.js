$(document).ready(function(){
	var fromMetals = ($('#fromMetal').val());
	var toMetals = ($('#toMetal').val());
	var multiplier = 1 ;
	var resultWeight =  $('#inWeight').keyup(function(){
        	$('#result').text($('#inWeight').val()*1);
    });


console.log(fromMetals);
	
	var conversionFunction = function(){
            var fromMetals = ($('#fromMetal').val());
            var toMetals = ($('#toMetal').val());
            // Wax to Other Metals
            if((fromMetals==='Wax') && (toMetals==='10k Yellow')){
                $('#result').text($('#inWeight').val()*11.57);
            }
            else if((fromMetals==='Wax') && (toMetals==='10k White')){
                $('#result').text($('#inWeight').val()*11.07);
            }
            else if((fromMetals==='Wax') && (toMetals==='14k Yellow')){
                $('#result').text($('#inWeight').val()*13.07);
            }
            else if((fromMetals==='Wax') && (toMetals==='14k White')){
                $('#result').text($('#inWeight').val()*12.61);
            }
            else if((fromMetals==='Wax') && (toMetals==='18k Yellow')){
                $('#result').text($('#inWeight').val()*15.58);
            }
            else if((fromMetals==='Wax') && (toMetals==='18k White')){
                $('#result').text($('#inWeight').val()*14.64);
            }
            else if((fromMetals==='Wax') && (toMetals==='Sterling Silver')){
                $('#result').text($('#inWeight').val()*10.47);
            }
            else if((fromMetals==='Wax') && (toMetals==='Platinum(95.2%)')){
                $('#result').text($('#inWeight').val()*21.45);
            }
            else if((fromMetals==='Wax') && (toMetals==='Alloy')){
                $('#result').text($('#inWeight').val()*18.42);
            }
            else if((fromMetals==='Wax') && (toMetals==='24k(F.Gold)')){
                $('#result').text($('#inWeight').val()*19.35);
            }
            //10k Yellow to Other Metals
            else if((fromMetals==='10k Yellow') && (toMetals==='10k Yellow')){
                $('#result').text($('#inWeight').val()*1);
            }
            else if((fromMetals==='10k Yellow') && (toMetals==='10k White')){
                $('#result').text($('#inWeight').val()*0.958);
            }
            else if((fromMetals==='10k Yellow') && (toMetals==='14k Yellow')){
                $('#result').text($('#inWeight').val()*1.13);
            }
            else if((fromMetals==='10k Yellow') && (toMetals==='14k White')){
                $('#result').text($('#inWeight').val()*1.09);
            }
            else if((fromMetals==='10k Yellow') && (toMetals==='18k Yellow')){
                $('#result').text($('#inWeight').val()*1.347);
            }
            else if((fromMetals==='10k Yellow') && (toMetals==='18k White')){
                $('#result').text($('#inWeight').val()*1.265);
            }
            else if((fromMetals==='10k Yellow') && (toMetals==='Sterling Silver')){
                $('#result').text($('#inWeight').val()*0.905);
            }
            else if((fromMetals==='10k Yellow') && (toMetals==='Platinum(95.2%)')){
                $('#result').text($('#inWeight').val()*1.855);
            }
            else if((fromMetals==='10k Yellow') && (toMetals==='Alloy')){
                $('#result').text($('#inWeight').val()*0.726);
            }
            else if((fromMetals==='10k Yellow') && (toMetals==='24k(F.Gold)')){
                $('#result').text($('#inWeight').val()*1.67);
            }
            //10k White to Other Metals
            else if((fromMetals==='10k White') && (toMetals==='10k Yellow')){
                $('#result').text($('#inWeight').val()*1.044);
            }
            else if((fromMetals==='10k White') && (toMetals==='10k White)')){
                $('#result').text($('#inWeight').val()*1);
            }
            else if((fromMetals==='10k White') && (toMetals==='14k Yellow')){
                $('#result').text($('#inWeight').val()*1.18);
            }
            else if((fromMetals==='10k White') && (toMetals==='14k White')){
                $('#result').text($('#inWeight').val()*1.14);
            }
            else if((fromMetals==='10k White') && (toMetals==='18k Yellow')){
                $('#result').text($('#inWeight').val()*1.408);
            }
            else if((fromMetals==='10k White') && (toMetals==='18k White')){
                $('#result').text($('#inWeight').val()*1.32);
            }
            else if((fromMetals==='10k White') && (toMetals==='Sterling Silver')){
                $('#result').text($('#inWeight').val()*0.946);
            }
            else if((fromMetals==='10k White') && (toMetals==='Platinum(95.2%)')){
                $('#result').text($('#inWeight').val()*1.936);
            }
            else if((fromMetals==='10k White') && (toMetals==='Alloy')){
                $('#result').text($('#inWeight').val()*0.759);
            }
            else if((fromMetals==='10k White') && (toMetals==='24k(F.Gold)')){
                $('#result').text($('#inWeight').val()*1.744);
            }
            //14k Yellow to Other Metals
            else if((fromMetals==='14k Yellow') && (toMetals==='10k Yellow')){
                $('#result').text($('#inWeight').val()*0.885);
            }
            else if((fromMetals==='14k Yellow') && (toMetals==='10k White')){
                $('#result').text($('#inWeight').val()*0.848);
            }
            else if((fromMetals==='14k Yellow') && (toMetals==='14k Yellow')){
                $('#result').text($('#inWeight').val()*1);
            }
            else if((fromMetals==='14k Yellow') && (toMetals==='14k White')){
                $('#result').text($('#inWeight').val()*0.965);
            }
            else if((fromMetals==='14k Yellow') && (toMetals==='18k Yellow')){
                $('#result').text($('#inWeight').val()*1.192);
            }
            else if((fromMetals==='14k Yellow') && (toMetals==='18k White')){
                $('#result').text($('#inWeight').val()*1.121);
            }
            else if((fromMetals==='14k Yellow') && (toMetals==='Sterling Silver')){
                $('#result').text($('#inWeight').val()*0.803);
            }
            else if((fromMetals==='14k Yellow') && (toMetals==='Platinum(95.2%)')){
                $('#result').text($('#inWeight').val()*1.640);
            }
            else if((fromMetals==='14k Yellow') && (toMetals==='Alloy')){
                $('#result').text($('#inWeight').val()*0.642);
            }
            else if((fromMetals==='14k Yellow') && (toMetals==='24k(F.Gold)')){
                $('#result').text($('#inWeight').val()*1.477);
            }
            //14k White to Other Metals
            else if((fromMetals==='14k White') && (toMetals==='10k Yellow')){
                $('#result').text($('#inWeight').val()*0.1919);
            }
            else if((fromMetals==='14k White') && (toMetals==='10k White')){
                $('#result').text($('#inWeight').val()*0.878);
            }
            else if((fromMetals==='14k White') && (toMetals==='14k Yellow')){
                $('#result').text($('#inWeight').val()*1.035);
            }
            else if((fromMetals==='14k White') && (toMetals==='14k White')){
                $('#result').text($('#inWeight').val()*1);
            }
            else if((fromMetals==='14k White') && (toMetals==='18k Yellow')){
                $('#result').text($('#inWeight').val()*1.236);
            }
            else if((fromMetals==='14k White') && (toMetals==='18k White')){
                $('#result').text($('#inWeight').val()*1.161);
            }
            else if((fromMetals==='14k White') && (toMetals==='Sterling Silver')){
                $('#result').text($('#inWeight').val()*0.83);
            }
            else if((fromMetals==='14k White') && (toMetals==='Platinum(95.2%)')){
                $('#result').text($('#inWeight').val()*1.703);
            }
            else if((fromMetals==='14k White') && (toMetals==='Alloy')){
                $('#result').text($('#inWeight').val()*0.664);
            }
            else if((fromMetals==='14k White') && (toMetals==='24k(F.Gold)')){
                $('#result').text($('#inWeight').val()*1.531);
            }
            //18k Yellow to Other Metals
            else if((fromMetals==='18k Yellow') && (toMetals==='10k Yellow')){
                $('#result').text($('#inWeight').val()*0.742);
            }
            else if((fromMetals==='18k Yellow') && (toMetals==='10k White')){
                $('#result').text($('#inWeight').val()*0.710);
            }
            else if((fromMetals==='18k Yellow') && (toMetals==='14k Yellow')){
                $('#result').text($('#inWeight').val()*0.839);
            }
            else if((fromMetals==='18k Yellow') && (toMetals==='14k White')){
                $('#result').text($('#inWeight').val()*0.811);
            }
            else if((fromMetals==='18k Yellow') && (toMetals==='18k Yellow')){
                $('#result').text($('#inWeight').val()*1);
            }
            else if((fromMetals==='18k Yellow') && (toMetals==='18k White')){
                $('#result').text($('#inWeight').val()*0.96);
            }
            else if((fromMetals==='18k Yellow') && (toMetals==='Sterling Silver')){
                $('#result').text($('#inWeight').val()*0.672);
            }
            else if((fromMetals==='18k Yellow') && (toMetals==='Platinum(95.2%)')){
                $('#result').text($('#inWeight').val()*1.377);
            }
            else if((fromMetals==='18k Yellow') && (toMetals==='Alloy')){
                $('#result').text($('#inWeight').val()*0.538);
            }
            else if((fromMetals==='18k Yellow') && (toMetals==='24k(F.Gold)')){
                $('#result').text($('#inWeight').val()*1.24);
            }
            //18k White to Other Metals
            else if((fromMetals==='18k White') && (toMetals==='10k Yellow')){
                $('#result').text($('#inWeight').val()*0.792);
            }
            else if((fromMetals==='18k White') && (toMetals==='10k White')){
                $('#result').text($('#inWeight').val()*0.755);
            }
            else if((fromMetals==='18k White') && (toMetals==='14k Yellow')){
                $('#result').text($('#inWeight').val()*0.893);
            }
            else if((fromMetals==='18k White') && (toMetals==='14k White')){
                $('#result').text($('#inWeight').val()*0.862);
            }
            else if((fromMetals==='18k White') && (toMetals==='18k Yellow')){
                $('#result').text($('#inWeight').val()*1.065);
            }
            else if((fromMetals==='18k White') && (toMetals==='18k White')){
                $('#result').text($('#inWeight').val()*1);
            }
            else if((fromMetals==='18k White') && (toMetals==='Sterling Silver')){
                $('#result').text($('#inWeight').val()*0.715);
            }
            else if((fromMetals==='18k White') && (toMetals==='Platinum(95.2%)')){
                $('#result').text($('#inWeight').val()*1.465);
            }
            else if((fromMetals==='18k White') && (toMetals==='Alloy')){
                $('#result').text($('#inWeight').val()*0.573);
            }
            else if((fromMetals==='18k White') && (toMetals==='24k(F.Gold)')){
                $('#result').text($('#inWeight').val()*1.32);
            }
            //Sterling Silver to Other Metals
            else if((fromMetals==='Sterling Silver') && (toMetals==='10k Yellow')){
                $('#result').text($('#inWeight').val()*1.105);
            }
            else if((fromMetals==='Sterling Silver') && (toMetals==='10k White')){
                $('#result').text($('#inWeight').val()*1.057);
            }
            else if((fromMetals==='Sterling Silver') && (toMetals==='14k Yellow')){
                $('#result').text($('#inWeight').val()*1.248);
            }
            else if((fromMetals==='Sterling Silver') && (toMetals==='14k White')){
                $('#result').text($('#inWeight').val()*1.205);
            }
            else if((fromMetals==='Sterling Silver') && (toMetals==='18k Yellow')){
                $('#result').text($('#inWeight').val()*1.487);
            }
            else if((fromMetals==='Sterling Silver') && (toMetals==='18k White')){
                $('#result').text($('#inWeight').val()*1.398);
            }
            else if((fromMetals==='Sterling Silver') && (toMetals==='Sterling Silver')){
                $('#result').text($('#inWeight').val()*1);
            }
            else if((fromMetals==='Sterling Silver') && (toMetals==='Platinum(95.2%)')){
                $('#result').text($('#inWeight').val()*2.049);
            }
            else if((fromMetals==='Sterling Silver') && (toMetals==='Alloy')){
                $('#result').text($('#inWeight').val()*0.802);
            }
            else if((fromMetals==='Sterling Silver') && (toMetals==='24k(F.Gold)')){
                $('#result').text($('#inWeight').val()*1.845);
            }
            //Platinum(95.2%) to Other Metals
            else if((fromMetals==='Platinum(95.2%)') && (toMetals==='10k Yellow')){
                $('#result').text($('#inWeight').val()*0.539);
            }
            else if((fromMetals==='Platinum(95.2%)') && (toMetals==='10k White')){
                $('#result').text($('#inWeight').val()*0.516);
            }
            else if((fromMetals==='Platinum(95.2%)') && (toMetals==='14k Yellow')){
                $('#result').text($('#inWeight').val()*0.608);
            }
            else if((fromMetals==='Platinum(95.2%)') && (toMetals==='14k White')){
                $('#result').text($('#inWeight').val()*0.588);
            }
            else if((fromMetals==='Platinum(95.2%)') && (toMetals==='18k Yellow')){
                $('#result').text($('#inWeight').val()*0.726);
            }
            else if((fromMetals==='Platinum(95.2%)') && (toMetals==='18k White')){
                $('#result').text($('#inWeight').val()*0.683);
            }
            else if((fromMetals==='Platinum(95.2%)') && (toMetals==='Sterling Silver')){
                $('#result').text($('#inWeight').val()*0.487);
            }
            else if((fromMetals==='Platinum(95.2%)') && (toMetals==='Platinum(95.2%)')){
                $('#result').text($('#inWeight').val()*1);
            }
            else if((fromMetals==='Platinum(95.2%)') && (toMetals==='Alloy')){
                $('#result').text($('#inWeight').val()*0.391);
            }
            else if((fromMetals==='Platinum(95.2%)') && (toMetals==='24k(F.Gold)')){
                $('#result').text($('#inWeight').val()*0.901);
            }
            //Alloy to Other Metals
            else if((fromMetals==='Alloy') && (toMetals==='10k Yellow')){
                $('#result').text($('#inWeight').val()*1.377);
            }
            else if((fromMetals==='Alloy') && (toMetals==='10k White')){
                $('#result').text($('#inWeight').val()*1.315);
            }
            else if((fromMetals==='Alloy') && (toMetals==='14k Yellow')){
                $('#result').text($('#inWeight').val()*1.566);
            }
            else if((fromMetals==='Alloy') && (toMetals==='14k White')){
                $('#result').text($('#inWeight').val()*1.5);
            }
            else if((fromMetals==='Alloy') && (toMetals==='18k Yellow')){
                $('#result').text($('#inWeight').val()*1.855);
            }
            else if((fromMetals==='Alloy') && (toMetals==='18k White')){
                $('#result').text($('#inWeight').val()*1.743);
            }
            else if((fromMetals==='Alloy') && (toMetals==='Sterling Silver')){
                $('#result').text($('#inWeight').val()*1.245);
            }
            else if((fromMetals==='Alloy') && (toMetals==='Platinum(95.2%)')){
                $('#result').text($('#inWeight').val()*2.555);
            }
            else if((fromMetals==='Alloy') && (toMetals==='Alloy')){
                $('#result').text($('#inWeight').val()*1);
            }
            else if((fromMetals==='Alloy') && (toMetals==='24k(F.Gold)')){
                $('#result').text($('#inWeight').val()*2.3);
            }
            //24k(F.Gold) to Other Metals
            else if((fromMetals==='24k(F.Gold)') && (toMetals==='10k Yellow')){
                $('#result').text($('#inWeight').val()*0.599);
            }
            else if((fromMetals==='24k(F.Gold)') && (toMetals==='10k White')){
                $('#result').text($('#inWeight').val()*0.573);
            }
            else if((fromMetals==='24k(F.Gold)') && (toMetals==='14k Yellow')){
                $('#result').text($('#inWeight').val()*0.677);
            }
            else if((fromMetals==='24k(F.Gold)') && (toMetals==='14k White')){
                $('#result').text($('#inWeight').val()*0.652);
            }
            else if((fromMetals==='24k(F.Gold)') && (toMetals==='18k Yellow')){
                $('#result').text($('#inWeight').val()*0.805);
            }
            else if((fromMetals==='24k(F.Gold)') && (toMetals==='18k White')){
                $('#result').text($('#inWeight').val()*0.756);
            }
            else if((fromMetals==='24k(F.Gold)') && (toMetals==='Sterling Silver')){
                $('#result').text($('#inWeight').val()*0.54);
            }
            else if((fromMetals==='24k(F.Gold)') && (toMetals==='Platinum(95.2%)')){
                $('#result').text($('#inWeight').val()*1.11);
            }
            else if((fromMetals==='24k(F.Gold)') && (toMetals==='Alloy')){
                $('#result').text($('#inWeight').val()*0.435);
            }
            else if((fromMetals==='24k(F.Gold)') && (toMetals==='24k(F.Gold)')){
                $('#result').text($('#inWeight').val()*1);
            }
        };
        //keyup rection function
		$('#inWeight').keyup(
            conversionFunction
    	);
        $('.e1').change(
            conversionFunction
        );
	
	





})