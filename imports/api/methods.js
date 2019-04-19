import { Meteor } from "meteor/meteor";
import { HTTP } from "meteor/http";

if (Meteor.isServer){
  import wikipedia from "node-wikipedia";

  Meteor.methods({
    getPage(query) {
      console.log(query);
      return new Promise((resolve, reject) => {
        wikipedia.page.data(query, {content: true}, resolve);
      });
    }
  });
}
// wikipedia.page.data("Clifford_Brown", { content: true }, function(response) {
//   // structured information on the page for Clifford Brown (wikilinks, references, categories, etc.)
// });

// wikipedia.revisions.all("Miles_Davis", { comment: true }, function(response) {
//   // info on each revision made to Miles Davis' page
// });

// wikipedia.categories.tree(
//   "Philadelphia_Phillies",
//   function(tree) {
//     //nested data on the category page for all Phillies players
//   }
// );