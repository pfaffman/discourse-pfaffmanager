import DiscourseRoute from "discourse/routes/discourse";

export default DiscourseRoute.extend({
  controllerName: "actions-index",

  model() {
    return this.store.findAll("action");
  },

  renderTemplate() {
    this.render("actions-index");
  },
});
