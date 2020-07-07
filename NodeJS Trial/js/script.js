// let d = new Date();
// document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

function Send ()
    {
      objComport.Device              = comboDevice.options [ comboDevice.selectedIndex].text
      objComport.Speed               = 9600
      objComport.ComTimeout          = 500
      objComport.LogFile             = "C:\ComLog.txt"
      objComport.HardwareFlowControl = objComport.asFLOWCONTROL_DEFAULT

      objComport.Open()

      textResult.value = "Result: " + objComport.LastError + " (" +
        objComport.GetErrorDescription ( objComport.LastError ) + ")";

      if( objComport.IsOpened == -1 )
      {
         objComport.WriteString( textCommand.value );

         textResponse.value = ""

         while( objComport.LastError == 0 )
         {
            textResponse.value += objComport.ReadString () + "\n";
         }
      }

      objComport.Close ()
    }

    function ListDevices ()
    {
      nCount  = objComport.GetDeviceCount ();

      for ( i = 0 ; i < nCount ; i++ )
      {
        comboDevice.options [ i ] = new Option ( objComport.GetDevice ( i ), "" );
      }

      for ( i = 1 ; i < 9 ; i++ )
      {
        comboDevice.options [ i + nCount - 1 ] = new Option ( "COM" + i , "" );
      }
    }
