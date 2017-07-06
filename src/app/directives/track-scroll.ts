import { Component } from '@angular/core';

@Component({
    selector: '[track-scroll]',
    host: {'(window:scroll)': 'track($event)'},
    template: ''
})

export class TrackScrollDirective {
    track($event) {
        console.debug("Scroll Event", $event);
    }
}