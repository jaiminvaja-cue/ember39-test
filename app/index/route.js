import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(/* transition */) {
    this.transitionTo("login"); // Implicitly aborts the on-going transition.
  }
});
