// main app
var searchBar = new Vue({
  el: "#search-bar",
  delimiters: ['{{', '}}'],
  data: {
    isAdvanced: true,
    searchFilter: {
      groups: {
        year: year,
        shipNationOwner: shipNationOwner,
        slave: slave,
        outcome: outcome,
        itinerary: itinerary,
        captainAndCrew: captainAndCrew,
        source: source,
        settings: settings,
      },
    },
    searchQuery: {
      // put the search query in here
    },
    saved: [],
  },
  computed: {},
  watch: {
    isAdvanced: function(val) {},

    searchFilter: {
      handler: function(val) {

        // count all
        for (group in this.searchFilter.groups) { // group: slave
          var groupCount = {
            changed: 0,
            activated: 0
          };
          for (subGroup in this.searchFilter.groups[group]) { // subGroup: overallNumbers
            if (subGroup !== "count") {
              var subGroupCount = {
                changed: 0,
                activated: 0
              };
              for (variable in this.searchFilter.groups[group][subGroup]) { // variable: var_imp_port_voyage_begin
                if (variable !== "count") {
                  if (this.searchFilter.groups[group][subGroup][variable].changed) {
                    subGroupCount.changed += 1;
                  }
                  if (this.searchFilter.groups[group][subGroup][variable].activated) {
                    subGroupCount.activated += 1;
                  }
                }
              }
              // calculate for subGroups
              this.searchFilter.groups[group][subGroup].count.changed = subGroupCount.changed;
              this.searchFilter.groups[group][subGroup].count.activated = subGroupCount.activated;

              // accumulate for the group count
              groupCount.changed += subGroupCount.changed;
              groupCount.activated += subGroupCount.activated;
            }
          }

          // set group to changed and activated
          this.searchFilter.groups[group].count.changed = groupCount.changed;
          this.searchFilter.groups[group].count.activated = groupCount.activated;
        }

      },
      deep: true,
    },

  },

  methods: {
    // go over items and update counts when the inputs are changed
    changed(variable, changed) {
      // function to locate a variable
      for (key1 in this.searchFilter.groups) {
        for (key2 in this.searchFilter.groups[key1]) {
          if (key2 !== "count") {
            for (key3 in this.searchFilter.groups[key1][key2]) {
              if (key3 == variable.varName) {
                if (this.searchFilter.groups[key1][key2][key3].value["searchTerm0"] === undefined) {
                  this.searchFilter.groups[key1][key2][key3].value["searchTerm"] = variable["searchTerm"];
                } else {
                  this.searchFilter.groups[key1][key2][key3].value["searchTerm0"] = variable["searchTerm0"];
                  this.searchFilter.groups[key1][key2][key3].value["searchTerm1"] = variable["searchTerm1"];
                }
                this.searchFilter.groups[key1][key2][key3].changed = changed;

                this.searchFilter.groups[key1][key2][key3].value["op"] = variable["op"];
              }
            }
          }
        }
      }
      // function to locate a variable
    },

    // turn changed items into activated state; then execute search
    apply(group, subGroup, filterValues) {
      activateFilter(this.searchFilter.groups, group, subGroup, filterValues);
      var searchTerms = searchAll(this.searchFilter.groups);
      alert(JSON.stringify(searchTerms));
      search(this.searchFilter, searchTerms);
    },

    // reset inputs, filters, and counts back to default state
    reset(group, subGroup) {
      resetFilter(this.searchFilter.groups, group, subGroup);
      var searchTerms = searchAll(this.searchFilter.groups);
      search(this.searchFilter, searchTerms);
    },

    toggle() {
      this.isAdvanced = !this.isAdvanced;
    },

    save() {
      var searchTerms = searchAll(this.searchFilter.groups);
      var existingKeys = []
      var key = generateUniqueRandomKey(existingKeys);
      this.saved.unshift({
        key: key,
        searchTerms: searchTerms
      });
    },
  },

  mounted: function() {
    $('.search-menu').on("click.bs.dropdown", function(e) {
      e.stopPropagation();
      e.preventDefault();
    });
    var self = {};
    var $vm = this;

    // // load places
    // axios.get('/contribute/places_ajax').then(function(response) {
    //   var data = processPlacesAjax(response.data);
    //   var options = [{
    //     id: 0,
    //     label: "Select All",
    //     children: null
    //   }];
    //
    //   // fill select all
    //   options = [{
    //     id: 0,
    //     code: 0,
    //     label: "Select All",
    //     children: [],
    //   }];
    //
    //   // fill broad regions
    //   for (key in data.broadRegions) {
    //     options[0].children.push({
    //       id: data.broadRegions[key].order,
    //       label: data.broadRegions[key].broad_region,
    //       children: [],
    //     })
    //   }
    //
    //   // build regions
    //   for (regionId in data.regions) {
    //     var broadRegion = data.regions[regionId].broad_region;
    //     for (broadRegionId in options[0].children) {
    //       if (options[0].children[broadRegionId].id == broadRegion.order) {
    //         options[0].children[broadRegionId].children.push({
    //           id: data.regions[regionId].code,
    //           label: data.regions[regionId].region,
    //           children: []
    //         })
    //       }
    //     }
    //   }
    //
    //   // fill ports
    //   for (portId in data.ports) {
    //     // get basic information about a port
    //     var code = data.ports[portId].code;
    //     var label = data.ports[portId].port;
    //     var regionId = data.ports[portId].region.code;
    //     var broadRegionId = data.ports[portId].region.broad_region.order;
    //
    //     // locate corresponding location in the options tree
    //     options[0].children.map(function(broadRegion) {
    //       if (broadRegion.id == broadRegionId) {
    //         broadRegion.children.map(function(region) {
    //           if (region.id == regionId) { // in the correct region
    //             region.children.push({ // fill port
    //               id: code,
    //               label: label
    //             })
    //           }
    //         })
    //       }
    //     });
    //
    //   }
    //
    //   $vm.places = options;
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });

    // load place related variables
    loadPlaces(this, $vm.searchFilter.groups.itinerary);
    loadIndividualPlace(this, $vm.searchFilter.groups.shipNationOwner.constructionAndRegistration.var_registered_place);
    loadIndividualPlace(this, $vm.searchFilter.groups.shipNationOwner.constructionAndRegistration.var_vessel_construction_place);


    // load treeselect variable
    loadOptions(this, [
      $vm.searchFilter.groups.outcome.outcome.var_outcome_voyage,
      $vm.searchFilter.groups.outcome.outcome.var_outcome_slaves,
      $vm.searchFilter.groups.outcome.outcome.var_outcome_ship_captured,
      $vm.searchFilter.groups.outcome.outcome.var_outcome_owner,
      $vm.searchFilter.groups.outcome.outcome.var_resistance,
      $vm.searchFilter.groups.shipNationOwner.rigTonnageAndGunsMounted.var_rig_of_vessel,
      $vm.searchFilter.groups.shipNationOwner.flag.var_nationality,
      // $vm.searchFilter.groups.shipNationOwner.flag.var_imputed_nationality,
    ]);

    search(this.searchFilter, []);
  },

  // event loop - update the menuAim everytime after it's re-rendered
  updated: function() {
    $menu.menuAim({
      activate: activateSubmenu,
      deactivate: deactivateSubmenu
    });
  },
})