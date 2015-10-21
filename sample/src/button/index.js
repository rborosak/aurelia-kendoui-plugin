import {useView} from 'aurelia-framework';
import 'kendo-ui/src/styles/web/kendo.bootstrap.css!';

@useView("/src/shared/showcase.html")
export class Index {

	configureRouter(config, router){
	    config.title = 'Button';
	    config.map([
	      { route: ['','basic-use'],  moduleId: './basic-use',      nav: true, title:'Basic Use' },
	      { route: 'images',  moduleId: './images',      nav: true, title:'Images' },
	  	]);

	    this.router = router;
	}
}