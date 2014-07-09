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
			$applyCompanyName=$_POST['applyCompanyName'];
			$applyAddress=$_POST['applyAddress'];
			$applyCity=$_POST['applyCity'];
			$applyState=$_POST['applyState'];
			$ApplyZipcode=$_POST['ApplyZipcode'];
			$applyTel=$_POST['applyTel'];
			$applyFax=$_POST['applyFax'];
			$applyEmail=$_POST['applyEmail'];
			$applyOwner=$_POST['applyOwner'];
			$applyAuthBuyer=$_POST['applyAuthBuyer'];
			$applyAccPay=$_POST['applyAccPay'];
			$applyAccPayEm=$_POST['applyAccPayEm'];
			$applyBusType=$_POST['applyBusType'];
			$applySellerID=$_POST['applySellerID'];
			$applyDateEstab=$_POST['applyDateEstab'];
			$applyAML=$_POST['applyAML'];
			$applyCompliance=$_POST['applyCompliance'];
			$applyBankName=$_POST['applyBankName'];
			$applyBankAddress=$_POST['applyBankAddress'];
			$applyBankTel=$_POST['applyBankTel'];
			$applyRefName1=$_POST['applyRefName1'];
			$applyRefPhone1=$_POST['applyRefPhone1'];
			$applyRefAdd1=$_POST['applyRefAdd1'];
			$applyRefName2=$_POST['applyRefName2'];
			$applyRefPhone2=$_POST['applyRefPhone2'];
			$applyRefAdd2=$_POST['applyRefAdd2'];
			$applyRefName3=$_POST['applyRefName3'];
			$applyRefPhone3=$_POST['applyRefPhone3'];
			$applyRefAdd3=$_POST['applyRefAdd3'];





			//submits to database table
			mysql_query("INSERT INTO creditApplication VALUES ('$applyCompanyName','$applyAddress','$applyCity','$applyState','$ApplyZipcode','$applyTel','$applyFax','$applyEmail','$applyOwner','$applyAuthBuyer','$applyAccPay','$applyAccPayEm','$applyBusType','$applySellerID','$applyDateEstab','$applyAML','$applyCompliance','$applyBankName','$applyBankAddress','$applyBankTel','$applyRefName1','$applyRefPhone1','$applyRefAdd1','$applyRefName2','$applyRefPhone2','$applyRefAdd2','$applyRefName3','$applyRefPhone3','$applyRefAdd3')");


			//create array for email
			$emailArray = array("Credit Card Application Form", "Company Name: ".$applyCompanyName,"Billing Address: ".$applyAddress,"City: ".$applyCity,"State: ".$applyState,"Zip Code: ".$ApplyZipcode,"Tel: ".$applyTel,"Fax: ".$applyFax,"Email: ".$applyEmail,"Name of Owner: ".$applyOwner,"Authorized Buyer: ".$applyAuthBuyer,"Name of Account Payable: ".$applyAccPay,"Accounts Payable Email: ".$applyAccPayEm,"Type of Business: ".$applyBusType,"Valid Sellers ID: ".$applySellerID,"Date Business was Established".$applyDateEstab,"Is there an AML Program Instituted: ".$applyAML,"Compliance Officer: ".$applyCompliance,"Bank Reference","Bank Name: ".$applyBankName,"Bank Address: ".$applyBankAddress,"Bank Tel: ".$applyBankTel,"References","Name 1: ".$applyRefName1,"Phone 1: ".$applyRefPhone1,"Address 1: ".$applyRefAdd1,"Name 2: ".$applyRefName2,"Phone 2: ".$applyRefPhone2,"Address 2: ".$applyRefAdd2,"Name 3: ".$applyRefName3,"Phone 3: ".$applyRefPhone3,"Address 3: ".$applyRefAdd3);
			$arrayLength = count($emailArray);
			//$emailArrayFunction = function(){for($i=0; $i<$arrayLength; $i++){$emailArray[$i];}};
			//$emailArrayFunction = function($emailArray){foreach($emailArray as $item){echo $item;}};

			//assigns email variables and sends the email
			$to = "mjsgreen01@gmail.com";
			$subject = "Credit Application Test";
			$body = implode("\n", $emailArray);
			mail($to, $subject, $body);
		?>
	</body>
</html>
