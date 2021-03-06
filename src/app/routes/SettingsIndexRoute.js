import {
	get,
	set,
	Route
} from "Ember";


export default Route.extend({
	actions: {
		didTransition() {
			var settingsController = this.controllerFor( "settings" );
			var goto = get( settingsController, "currentSubmenu" );
			if ( !goto ) {
				goto = "settings.main";
			}

			set( settingsController, "isAnimated", false );

			this.replaceWith( goto );
		},

		willTransition() {
			return false;
		}
	}
});
