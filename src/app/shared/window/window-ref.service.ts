import {inject, Injectable, InjectionToken} from '@angular/core';

export const WINDOW = new InjectionToken<Window>('WindowToken', {
    factory: () => {
        if(typeof window !== 'undefined') {
            return window
        }
        return new Window();
    }
});

export interface CustomWindow extends Window {
    __custom_global_stuff: string;
}

@Injectable()
export class WindowRefService {
    private window = null;

    constructor() {
        this.window =  inject(WINDOW)
    }

    get nativeWindow (): CustomWindow {
        return this.window;
    }

}
