// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';

import {ComponentsModule} from '../../../common/components/module';
import {SharedModule} from '../../../shared.module';

import {ActionbarComponent} from './detail/actionbar/component';
import {NamespaceDetailComponent} from './detail/component';
import {namespaceDetailState} from './detail/state';
import {NamespaceListComponent} from './list/component';
import {namespaceListState} from './list/state';
import {namespaceState} from './state';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    UIRouterModule.forChild({
      states: [
        namespaceState,
        namespaceListState,
        namespaceDetailState,
      ]
    }),
  ],
  declarations: [NamespaceListComponent, NamespaceDetailComponent, ActionbarComponent],
})
export class NamespaceModule {
}
