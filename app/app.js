var data = {
  no_device: true,
  sel_platform: null,
  sel_example: null,
  firmwareFile: null,
  accordionOpen: false,
  displaySelectedFile: false,
  darkMode: false,
  showProgressBar: false,
  pedalFirmware: [
    { title: "LOSSY", file: "assets/firmware/CB_LOSSY.bin" },
    { title: "MOOD MKII", file: "assets/firmware/CB_MOOD_MKII.bin" },
    { title: "GENERATION LOSS MKII", file: "assets/firmware/CB_MOOD_MKII.bin" },
    { title: "BLOOPER", file: "assets/firmware/CB_MOOD_MKII.bin" },
    { title: "HABIT", file: "assets/firmware/CB_MOOD_MKII.bin" },
    { title: "REVERSE MODE C", file: "assets/firmware/CB_MOOD_MKII.bin" },
  ],
};

var app = new Vue({
  el: "#app",
  template: /* HTML */ `
    <div class="app_body mb-32">
      <nav
        class="flex items-center justify-between h-32 border-b-2 border-black mb-16"
      >
        <!--        <button @click="toggleDarkMode">Toggle Dark Mode</button>-->
        <div class="w-1/3 flex justify-start">
          <!-- Left side content if any, or keep empty to maintain balance -->
          <a href="#" @click="navigateBackOrRedirect" class="back-to-site">
            <div class="flex items-center">
              <svg
                class="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <h2 class="text-2xl font-bold">to main site</h2>
            </div>
          </a>
        </div>

        <div class="w-1/3 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2315 307"
            aria-label="Logo of CBA"
            class="w-48 h-48"
          >
            <path
              d="M56.5 23C26.3 35.1 1.1 45 .7 45.2c-.4.2 9.1 25.6 21.3 56.5 12.1 30.9 22 56.6 22 57 0 .4-5.7.6-12.7.5-7.1-.2-17-.1-22 .3l-9.3.7V307h105.1c99.6 0 105-.1 104.5-1.8-.2-.9-1.4-5.1-2.5-9.3-2.9-10.4-7.8-22.5-13.7-33.9l-4.9-9.5 9.5 9.5c12.1 12 25.2 21.4 40.5 28.9 19.2 9.4 37 14.2 57.9 15.7l9.6.7v-115l-4.7-.7c-11.2-1.4-23.6-10.3-28.6-20.3-7.5-14.7-5.3-31.2 5.8-43.1 5.7-6.1 13.2-10.5 20-11.7 2.2-.4 4.8-.9 5.8-1.2 1.6-.4 1.7-4 1.7-57.4V1h-7.2c-20.7.1-47 7.5-67.3 19.1-32.6 18.5-57 47.6-69.5 82.7l-3.7 10.3-21.9-55.8c-14.2-36.1-22.5-55.9-23.4-56-.8-.1-26.2 9.7-56.5 21.7zm99.9 100c-.8 3.6-1.9 12-2.6 18.7-2.5 26.2 3.7 58.3 15.8 81.4 1.6 3 3.1 5.8 3.3 6.3.2.4-3-2.9-7.1-7.5-14.9-16.7-37.9-34.1-58.3-43.9-13-6.3-34.2-13.4-46.5-15.6-5.2-.9-10.3-1.9-11.3-2.3-1.2-.4 17.2-8.1 53-22.2 30.1-11.9 54.9-21.6 54.9-21.5.1 0-.4 3-1.2 6.6zm534.6 2v122h38v-56.3c0-61.9 0-62.4 6.2-73.9 7.1-13.3 22.3-21.8 39.3-21.8 8.8.1 14.4 1.3 22.1 5.1 7.6 3.8 13.2 9.2 17.2 16.7 6.1 11.5 6.2 12.4 6.2 74.1V247h37v-54.9c0-44.6-.3-56.5-1.5-63.7-5-29.1-19.2-49.4-42-60.4-12-5.7-18.8-7.2-36.6-7.7-18-.6-26.2.7-39.6 6.1l-8.3 3.4V3h-38v122zm898 0v122h37.9l.3-8 .3-7.9 4.9 3c6.1 3.8 17.3 8.4 26.2 10.6 10.6 2.6 34.1 2.4 45.8-.5 32.5-8.1 56.4-30.8 66.2-62.7 2.6-8.5 2.8-10.1 2.9-28.5 0-16.1-.3-20.7-1.9-26.5-10.9-40.4-41.6-64.9-84.2-67.2-18.8-1-36 2.7-52.1 11.2l-8.3 4.4V3h-38v122zm105.5-31.5c20.4 5.2 34.9 20.3 39.9 41.5.9 3.8 1.6 11.2 1.6 17.6 0 19.1-4.9 32.9-16 44.7-10.3 11.1-23.9 16.7-40.1 16.7-20.2 0-36.5-10.2-45.4-28.4-5.3-10.8-6.6-17.3-6.6-31.6.1-20.4 5-34.8 15.8-46.1 12.4-13 33.2-18.9 50.8-14.4zm120.7 17.7.3 108.3 2.7 5.7c3.7 7.9 9.8 14.2 17.7 18.1l6.5 3.2 19.3.3 19.3.4V210h-9.2c-11 0-15.4-1.7-18-7-1.7-3.3-1.8-10.2-1.8-101.8V3h-37l.2 108.2zM1934.6 4.4c-7.7 2.9-13.5 11.1-13.6 19.2 0 2.7 1 6.1 2.8 9.5 4.9 9.4 16.2 13.3 25.7 9 11.7-5.3 15.8-19.9 8.5-30-5.5-7.5-15.2-10.7-23.4-7.7zM561.5 60.1c-7.6 1.1-21.5 5.4-28 8.6-21.8 11.1-36.2 29.7-43.2 55.8-2.3 9-2.6 11.8-2.7 27.5 0 19.5 1.5 28.1 7.5 42.5 10.2 24.6 30.9 42.5 57.4 49.6 11.2 3 35.5 3.3 46.5.5 17.4-4.5 30.6-12 41.7-24 9.1-9.8 15.1-20.3 18.8-32.3l.6-2.3h-40.6l-2.3 4.9c-3.6 7.9-11.3 15.5-19.8 19.7-6.4 3.2-8.5 3.7-16.6 4.2-11.2.5-18.5-.8-27-5.1-12.1-6-21.1-18.2-26-35.2-1.8-6.7-2.2-10.4-2.2-22 .1-15.7 1.4-22.2 6.9-34.3 10.9-23.5 37.5-33.7 63-24.1 7.2 2.7 17.2 11.9 21.1 19.4l2.9 5.5H660l-.6-2.8c-2.6-11.2-12.1-26.9-21.7-35.8-17.1-16.1-48.1-24.3-76.2-20.3zm399.8.4c-42.4 7.7-69.8 37.8-74.4 81.7-3.1 29.3 5.8 57.8 23.9 77 11.5 12.2 26.4 20.6 44 25 11.2 2.8 33.7 3 45.1.4 9-2 21.8-7.1 28.6-11.4l5-3.1.3 8.4.3 8.5h37.9V59h-38v7.5c0 4.1-.2 7.5-.4 7.5s-3.9-1.8-8.2-3.9c-4.4-2.2-10.7-4.9-14.1-6-14.5-4.9-34.9-6.3-50-3.6zm32.6 33.2c18.6 5.1 30.9 17.8 37.2 38.3 3 9.7 3.3 28 .6 38-4.3 15.7-15.5 31.3-26.7 37-22.3 11.4-46.7 8.5-62.6-7.4-11.5-11.6-16.3-23.5-17.1-42.2-1-21.6 4.1-37.8 15.7-49.8 13.7-14.3 33.3-19.4 52.9-13.9zm168.8-33.2c-23 4.4-40.1 16.4-48.4 34-2.6 5.6-2.8 6.9-2.8 18.5 0 12.1.1 12.8 3.3 19.2 4.3 8.8 12.7 16.5 23.5 21.7 7.4 3.6 15.8 6.4 47.7 16.1 12.4 3.8 22.5 8.2 25.9 11.3 5.2 4.8 6.4 12.2 3.2 19.3-6.2 13.6-32.6 18.6-50.9 9.6-8.4-4.1-16.2-13.8-16.2-20.2 0-1.9-.6-2-19.5-2H1109v3.7c.1 14.7 12 33.1 27.6 42.6 13.7 8.3 27.8 11.7 48.3 11.7 26.5 0 44-6.3 57.2-20.8 17-18.6 16.6-47-.9-64-10.4-10.1-21.1-14.8-58.2-25.7-16.4-4.8-22.8-7.7-27.9-12.9-7.3-7.4-7.4-15.9-.5-23.6 5.3-5.8 12.6-8.3 24.4-8.3 12.5 0 19.4 2.5 26.7 9.7 3.9 3.9 5.5 6.4 6.8 10.8l1.6 5.8h36.9v-4.4c0-7.4-4.4-19.5-10-27.4-7.5-10.7-18.5-18.1-34.5-23.2-9.1-2.9-32-3.7-43.8-1.5zm185.8-.1c-39.4 7.7-65 34.4-71 74.3-5.5 36.6 5.8 71.2 30.1 91.6 8.6 7.3 23.9 14.9 35.9 17.9 12.7 3.1 36.3 3.1 48-.1 25.3-6.8 46.1-24.1 56.1-46.8 1.3-2.9 2.4-5.8 2.4-6.3 0-.6-7.9-1-20.4-1h-20.4l-1.2 2.9c-1.7 4.2-11 13.2-16.8 16.4-13.9 7.6-31.9 7.7-47.7.2-13.5-6.4-25.5-22.7-27.1-36.8l-.7-5.7h139.1l.7-8.7c3-35.2-9.9-65.9-34.9-83.2-8.8-6.1-15.6-9.2-27.5-12.7-10.7-3.2-33.2-4.2-44.6-2zm32.5 32.3c12.7 3.4 25.4 13.2 30.6 23.4 2.8 5.6 5.9 18.4 4.8 20.1-.7 1.2-99 .6-100.1-.6-1-1 2.5-12.3 5.7-18.5 10.6-21.1 34.7-31.1 59-24.4zm541.7-33c-.4.3-.7 42.6-.7 94V247h38V59h-18.3c-10.1 0-18.7.3-19 .7zm129.6.7c-16.2 3.1-28.8 9.1-37.8 18.1-10.7 10.7-15.1 22.2-14.3 37.6.9 14.7 7.6 25.9 20.9 34.8 7.5 5 17.5 8.9 39.2 15.1 23.2 6.7 35.2 11.6 40.1 16.1 3.6 3.3 4 4.2 4.4 9.6.3 4.7 0 6.8-1.7 10.2-4.4 8.6-17.5 13.7-32.8 12.9-10.9-.6-18.4-3.3-24.8-9-4.6-4.1-9.5-12.3-9.5-16.1 0-1.6-1.6-1.7-19.5-1.7-22.2 0-20.5-.8-18.4 9.2 4.8 23.4 26.6 42.1 56.2 48.4 11.3 2.3 31.5 1.9 43.1-1 27-6.9 43.7-24.8 45.3-48.6 1.3-18-7.5-33.4-24.9-43.8-6-3.6-23.3-9.8-45.3-16.2-18.3-5.4-24.6-8.3-29.5-13.6-4.5-4.9-5.5-7.7-4.7-14 1.3-12.1 18-20.2 36.1-17.4 14.7 2.3 24.1 9.8 27.2 22l1.1 4.5 18.7.3 18.6.2v-3.3c0-5.6-3.8-18.6-7.2-24.6-5-8.8-14.9-18-24.8-22.8-4.7-2.3-11.2-4.9-14.5-5.8-8.2-2.3-31.7-2.9-41.2-1.1zm172.7.1c-17.1 2.7-30.6 9.2-40.3 19.4-10.5 11-15.3 26-12.9 40.3 3.6 20.6 17.4 32.7 48.2 42.2 6.3 1.9 16.9 5.1 23.5 7.1 27.2 8.3 33.5 12.8 33.5 24.1 0 13.4-14.2 22.2-34.4 21.2-11.2-.6-18.6-3.3-25.1-9-4.6-4.1-9.5-12.3-9.5-16.1 0-1.6-1.6-1.7-19.5-1.7H2169v3.1c0 4.5 2.8 14.5 5.5 19.8 7.6 15 23 26.7 43.2 32.7 6.8 2 11.7 2.7 22.1 3.1 26.6 1.1 46.3-5.1 60-18.8 10.5-10.5 14.7-21.4 14-36.9-.3-8.5-.8-10.5-3.7-16.6-7.2-14.6-20.9-24.1-46.1-31.8-6.3-1.9-17.6-5.3-25-7.6-15.3-4.7-20.1-7.2-25.3-12.9-6.5-7.2-5.9-16.3 1.4-23.3 8.9-8.5 29.5-10.5 43-4.1 8.5 3.9 13.8 10.7 15.4 19.6l.7 3.7h36.8v-4.3c0-10.7-5.8-24.2-14.6-33.7-15.7-16.9-42-24.1-71.4-19.5z"
            />
          </svg>
        </div>

        <div class="w-1/3 flex justify-end">
          <!-- Right side content if any, or keep empty to maintain balance -->
        </div>
      </nav>
      <div align="center">
        <div
          v-if="!isChromiumBasedBrowser"
          class="warning absolute top-2 right-0 left-0 w-96 z-100 mx-auto p-4 bg-red-500 text-white text-left shadow-2xl  space-y-4"
        >
          <h3 class="text-2xl font-semibold text-center">Browser Warning</h3>
          <p>This interface only works on Google Chrome or Microsoft Edge.</p>
          <p>Please use one of these browsers for the best experience.</p>
        </div>
        <div>
          <h1 class="h1 shadow">Chase Bliss Firmware Interface Program.</h1>
        </div>

        <img
          src="assets/binary.svg"
          alt="Binary Image"
          style="width: 40vw"
          class="py-6 invert"
        />
        <div
          class="mb-16 shadow"
          style="width: min-content; border: 1px solid black;"
        >
          <div class="relative w-full">
            <button
              @click="toggleAccordion($event)"
              class="w-96 flex justify-between py-3 px-4 border-none device-select"
            >
              <p class="font-normal">Select Device Firmware</p>
              <svg
                :class="{ 'transform rotate-180': accordionOpen }"
                class="w-6 h-6 svg-hover"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <transition name="accordion">
              <div
                v-if="accordionOpen"
                key="content"
                class="absolute z-10  shadow-2xl"
                style="background-color: #fefbf6; top: 100%; left: -0.7px; box-sizing: border-box; border: 1px solid black; width: calc(100% - -1.5px);"
              >
                <div class="flex flex-col text-left divide-y divide-black">
                  <template
                    v-for="(firmware, index) in pedalFirmware"
                    :key="index"
                  >
                    <a
                      :href="firmware.file"
                      download
                      class="py-3 px-4 a-file"
                      @click="closeAccordion"
                    >
                      <span>Download</span>
                      <span class="font-bold"> {{ firmware.title }} </span>
                      <span>firmware</span>
                    </a>
                  </template>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div class="space-y-4">
          <button class="shadow" variant="es" id="connect">Connect</button>
          <b-form-file
            id="firmwareFile"
            v-model="firmwareFile"
            :state="Boolean(firmwareFile)"
            placeholder="Upload firmware"
            drop-placeholder="Drop file here..."
            :disabled="no_device"
            :class="['shadow w-min',{ 'opacity-40 cursor-not-allowed': no_device }]"
          ></b-form-file>
          <button
            id="download"
            :class="['shadow', { 'text-green-500 border-green-500': !no_device && sel_example && firmwareFile,'opacity-40 cursor-not-allowed text-black border-black': no_device || !sel_example || !firmwareFile}]"
            variant="es"
            :disabled="no_device || !sel_example || !firmwareFile"
          >
            Update
          </button>
        </div>
        <!--        <progress id="progressBar" value="50" max="100"></progress>-->
        <div class="log mt-12 w-fit" id="downloadLog" />
        <div v-if="sel_example||firmwareFile">
          <div v-if="displaySelectedFile">
            <!-- Content based on selected file or example will be shown here -->
          </div>
        </div>
      </div>
      <div v-if="showProgressBar" class="progress-bar-container">
        <progress id="progress" max="100" value="0"></progress>
      </div>
      <h2 id="mobileWarning" class="mt-8 text-red-500 font-semibold">
        This app is not optimized for mobile devices. Please use Chrome browser
        on desktop.
      </h2>
      <!-- Initially hidden elements -->
      <div align="center" style="display:none;">
        <button id="detach" disabled="true">Detach DFU</button>
        <button id="upload" disabled="true">Upload</button>
        <form id="configForm">
          <p>
            <label for="transferSize">Transfer Size:</label>
            <input
              type="number"
              name="transferSize"
              id="transferSize"
              value="1024"
            />
          </p>
          <p><span id="status"></span></p>
          <p>
            <label for="vid">Vendor ID (hex):</label>
            <input
              list="vendor_ids"
              type="text"
              name="vid"
              id="vid"
              maxlength="6"
              size="8"
              pattern="0x[A-Fa-f0-9]{1,4}"
            />
            <datalist id="vendor_ids"></datalist>
          </p>
          <div id="dfuseFields">
            <label for="dfuseStartAddress">DfuSe Start Address:</label>
            <input
              type="text"
              name="dfuseStartAddress"
              id="dfuseStartAddress"
              title="Initial memory address to read/write from (hex)"
              size="10"
              pattern="0x[A-Fa-f0-9]+"
            />
            <label for="dfuseUploadSize">DfuSe Upload Size:</label>
            <input
              type="number"
              name="dfuseUploadSize"
              id="dfuseUploadSize"
              min="1"
              max="2097152"
            />
          </div>
        </form>
        <div id="usbInfo" style="white-space: pre;"></div>
        <div id="dfuInfo" style="white-space: pre;"></div>
        <row class="p-2">
          <legend>Getting Started? Flash the Blink example!</legend>
          <div>
            <button variant="es" id="blink" :disabled="no_device">
              Flash Blink!
            </button>
          </div>
        </row>
        <div id="collapseAdvanced">
          <br />
          <div>
            <b-button variant="es" id="bootloader" :disabled="no_device"
              >Flash Bootloader Image</b-button
            >
          </div>
        </div>
      </div>
    </div>
  `,
  data: data,
  methods: {
    handleOutsideClick(e) {
      // Check if click was outside the accordion and if the accordion is open
      if (
        this.accordionOpen &&
        (!this.$refs.accordion || !this.$refs.accordion.contains(e.target))
      ) {
        this.accordionOpen = false;
      }
    },
    setProgressBarVisibility(visible) {
      this.showProgressBar = visible;
    },
    toggleAccordion(e) {
      this.accordionOpen = !this.accordionOpen;
      // Stop the click event from propagating to the document
      e.stopPropagation();
    },
    closeAccordion() {
      this.accordionOpen = false;
    },
    navigateBackOrRedirect() {
      // Check if the referrer is https://chasebliss.com
      if (document.referrer.includes("https://chasebliss.com")) {
        // Go back in history if the user came from chasebliss.com
        window.history.back();
      } else {
        // Redirect to chasebliss.com if the referrer is different
        window.location.href = "https://chasebliss.com";
      }
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      // Save the new state to localStorage
      localStorage.setItem("darkMode", this.darkMode ? "enabled" : "disabled");
    },
  },

  computed: {
    isChromiumBasedBrowser() {
      // Check if the userAgent contains "Chrome". This will include both Chrome and Edge, as Edge's userAgent also contains "Edg".
      return (
        /Chrome/.test(navigator.userAgent) || /Edg/.test(navigator.userAgent)
      );
    },
  },
  mounted() {
    document.addEventListener("click", this.handleOutsideClick);
    // Your existing mounted logic
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleOutsideClick);
    // Your existing beforeDestroy logic
  },

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
