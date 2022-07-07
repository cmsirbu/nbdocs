const SEARCH_DATA = [
    {
        "title": "Nautobot Device Onboarding",
        "description": "Simplify the onboarding process of a new device by allowing the user to specify a small amount of info and having the plugin populate a much larger amount of device data in Nautobot."
    },
    {
        "title": "Nautobot Golden Configuration",
        "description": "Automate configuration backups, perform configuration compliance, and generate intended configurations."
    },
    {
        "title": "Nautobot Device Lifecycle Management",
        "description": "This App works by making related associations to Devices, Device Types, and Inventory Items to help provide data about the hardware end of life notices, appropriate software versions to be running on the devices, and the maintenance contracts associated with devices."
    },
    {
        "title": "Nautobot Single Source of Truth(SSoT)",
        "description": "This app facilitates integration and data synchronization between various “source of truth” (SoT) systems, with Nautobot acting as a central clearinghouse for data - a Single Source of Truth."
    }
]

const FUSE_OPTIONS = {
    // isCaseSensitive: false,
    includeScore: true,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: [
        "title",
        "description"
    ]
};

function searchApps() {
    const searchTerm = document.getElementById("search-apps").value;
    const accordion = document.getElementById("search-apps-results");
    const fuse = new Fuse(SEARCH_DATA, FUSE_OPTIONS)
    const fuseResults = fuse.search(searchTerm)

    accordion.textContent = ""
    for (i in fuseResults) {
        let x = fuseResults[i]
        let newItem = document.createElement("div");

        newItem.setAttribute("class", "accordion-item");
        newItem.innerHTML = `
            <h2 class="accordion-header" id="heading${i}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                ${x.item.title}
            </button>
            </h2>
            <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#accordi${i}xample">
            <div class="accordion-body">
                ${x.item.description}
            </div>
            </div>
        `
        accordion.appendChild(newItem)
        //search_results += JSON.stringify(x)
    }
}
