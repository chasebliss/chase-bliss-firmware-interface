var data = {
  no_device: true,
  sel_platform: null,
  sel_example: null,
  firmwareFile: null,
  displaySelectedFile: false,
};

var app = new Vue({
  el: "#app",
  template: `
<div class="app_body">
    <div align="center">
        <button id="detach" disabled="true" hidden="true">Detach DFU</button>
        <button id="upload" disabled="true" hidden="true">Upload</button>
        <form id="configForm">
            <p>
                <label for="transferSize" hidden="true">Transfer Size:</label>
                <input type="number" name="transferSize" hidden="true" id="transferSize" value="1024"></input>
            </p>
            <p>
                <span id="status"></span>
            </p>

            <p>
                <label hidden="true" for="vid">Vendor ID (hex):</label>
                <input hidden="true" list="vendor_ids" type="text" name="vid" id="vid" maxlength="6" size="8" pattern="0x[A-Fa-f0-9]{1,4}">
                <datalist id="vendor_ids"></datalist>
            </p>

            <div id="dfuseFields" hidden="true">
                <label for="dfuseStartAddress" hidden="true">DfuSe Start Address:</label>
                <input type="text" name="dfuseStartAddress" id="dfuseStartAddress" hidden="true" title="Initial memory address to read/write from (hex)" size="10" pattern="0x[A-Fa-f0-9]+">
                <label for="dfuseUploadSize" hidden="true">DfuSe Upload Size:</label>
                <input type="number" name="dfuseUploadSize" id="dfuseUploadSize" min="1" max="2097152" hidden="true">
            </div>
        </form>
    </div>
    <div align="center" class="app_column">
        <div>
            <legend>Chase Bliss Firmware Interface Program</legend>
   
            <p><button variant="es" id="connect">Connect</button></p>

            <div id="usbInfo" hidden="true" style="white-space: pre"></div>
            <div id="dfuInfo" hidden="true" style="white-space: pre"></div>
            
        </div>

        <row class="p-2" hidden="true">
            <legend>Getting Started? Flash the Blink example!</legend>
            <div><button variant="es" id="blink" :disabled="no_device">Flash Blink!</button></div>
        </row>

        <row class="p-2">
            <legend>Or select a file from your computer</legend>
            <b-form-file
                id="firmwareFile"
                v-model="firmwareFile"
                :state="Boolean(firmwareFile)"
                placeholder="Choose or drop a file..."
                drop-placeholder="Drop file here..."
            ></b-form-file>
        </row>

        <div align="center">
            <legend>Programming Section</legend>
            <button id="download" variant='es' :disabled="no_device || !sel_example">Program</button>

            <div hidden="true" id="collapseAdvanced">
                <br>
                <div>
                    <b-button variant="es" id="bootloader" :disabled="no_device">Flash Bootloader Image</b-button>
                </div>                        
            </div>

            <div class="log" id="downloadLog"></div>            
  
            <div v-if="sel_example||firmwareFile">            
                <div v-if="displaySelectedFile">
                    <!--<h3 class="info">Name: {{sel_example.name}}</h3>-->
                    <!--<li>Description: {{sel_example.description}}</li>-->
                    <!--<h3 class="info">File Location: {{sel_example.filepath}} </h3>-->
                </div>
            </div>    
        </div>
    </div>        
</div>

    `,
  data: data,
  watch: {
    firmwareFile(newfile) {
      firmwareFile = null;
      this.displaySelectedFile = true;
      // Create dummy example struct
      // This updates sel_example to enable the Program button when a file is loaded
      var new_example = {
        name: newfile.name,
        description: "Imported File",
        filepath: null,
        platform: null,
      };
      this.sel_example = new_example;
      let reader = new FileReader();
      reader.onload = function () {
        this.firmwareFile = reader.result;
        firmwareFile = reader.result;
      };
      reader.readAsArrayBuffer(newfile);
    },
  },
});
