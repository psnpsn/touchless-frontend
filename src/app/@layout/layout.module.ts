import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DARK_THEME } from './styles/theme.dark';

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  LayoutComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbUserModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NB_MODULES,
  ],
  exports: [
    CommonModule, ...COMPONENTS
  ]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'dark',
          },
          [ DARK_THEME ],
        ).providers,
      ],
    } as ModuleWithProviders;
  }
 }
