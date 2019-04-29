/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { BaseElement, PropertyValues } from '@material/mwc-base/base-element.js';
import MDCTopAppBarBaseFoundation from '@material/top-app-bar/foundation';
import MDCTopAppBarFoundation from '@material/top-app-bar/standard/foundation.js';
import MDCShortTopAppBarFoundation from '@material/top-app-bar/short/foundation.js';
import { MDCTopAppBarAdapter } from '@material/top-app-bar/adapter';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-top-app-bar': TopAppBar;
    }
}
export declare class TopAppBar extends BaseElement {
    protected mdcFoundation: MDCTopAppBarBaseFoundation;
    protected readonly mdcFoundationClass: typeof MDCTopAppBarFoundation | typeof MDCShortTopAppBarFoundation;
    protected mdcRoot: HTMLElement;
    private _navIconSlot;
    private _actionItemsSlot;
    type: string;
    dense: boolean;
    centerTitle: boolean;
    private _scrollTarget;
    scrollTarget: HTMLElement | Window;
    static styles: import("lit-element/lib/css-tag").CSSResult;
    render(): import("lit-html/lib/template-result").TemplateResult;
    protected createAdapter(): MDCTopAppBarAdapter;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues): void;
    createFoundation(): void;
}
