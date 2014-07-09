<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
	</head>
	<body>
		<? 
			//connects to mysql database
			mysql_connect("mysql.dmjcasting.com", "dmjcastingjason", "matthew3") or die(mysql_error()); 
			mysql_select_db("dmjcastingforms") or die(mysql_error());

			//assigns input values to variables
			$companyName=$_POST['companyName'];              
	         $address=$_POST['address'];
	         $city=$_POST['city'];
	         $state=$_POST['state'];
	         $zipcode=$_POST['zipcode'];
	         $invoicePaid=$_POST['invoicePaid'];
	         $amountCharge=$_POST['amountCharge'];
	         $date=$_POST['date'];
	         $toCompanyName=$_POST['toCompanyName'];
	         $toAddress=$_POST['toAddress'];
	         $toCity=$_POST['toCity'];
	         $toState=$_POST['toState'];
	         $toZipCode=$_POST['toZipCode'];
	         $shipMethod=$_POST['shipMethod'];
	         $shipAccount=$_POST['shipAccount'];
	         $cardType=$_POST['cardType'];
	         $billName=$_POST['billName'];
	         $billNumber=$_POST['billNumber'];
	         $billSecurCode=$_POST['billSecurCode'];
	         $billExpire=$_POST['billExpire'];
	         $billSignature=$_POST['billSignature'];


			//submits to database table
			mysql_query("INSERT INTO creditAuthorization VALUES ('$companyName','$address','$city','$state','$zipcode','$invoicePaid','$amountCharge','$date','$toCompanyName','$toAddress','$toCity','$toState','$toZipCode','$shipMethod','$shipAccount','$cardType','$billName','$billNumber','$billSecurCode','$billExpire','$billSignature')");


			//create array for email
			$emailArray = array("Credit Card Authorization Form","Company Name: " . $companyName,"Address: " . $address,"City: " .$city,"State: ".$state,"Zip Code: ".$zipcode,"Invoice Paid#: ".$invoicePaid,"Amount Authorizing to Charge: ".$amountCharge,"Date: ".$date,"Ship To: ","Company Name: ".$toCompanyName,"Address: ".$toAddress,"City: ".$toCity,"Zip Code: ".$toZipCode,"Shipping Method: ".$shipMethod,"Shipping Account: ".$shipAccount,"Billing Information: ","Card Type: ".$cardType,"Cardholders Name: ".$billName,"Card Number: ".$billNumber,"Security Code: ".$billSecurCode,"Expiration Date: ".$billExpire);
			$arrayLength = count($emailArray);
			//$emailArrayFunction = function(){for($i=0; $i<$arrayLength; $i++){$emailArray[$i];}};
			//$emailArrayFunction = function($emailArray){foreach($emailArray as $item){echo $item;}};

			//assigns email variables and sends the email
			$to = "mjsgreen01@gmail.com";
			$subject = "Credit Authorize Test";
			$body = implode("\n", $emailArray);
			mail($to, $subject, $body);
		?>
	</body>
</html>
