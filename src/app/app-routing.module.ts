import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';


const routes: Routes = [
  { path : '', redirectTo : 'entrar', pathMatch :'full'},
  {path: 'entrar', component : EntrarComponent},
  {path : 'cadastrar' , component : CadastrarComponent},
  {path: 'inicio', component : InicioComponent},
  {path : 'sobre-nos' , component: SobreNosComponent},
  {path : 'tema' , component : TemaComponent},
  {path : 'tema-edit/:id', component : TemaEditComponent},
  // {path : 'tema-delet/:id', component : TemaDeleteComponent}
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  // {path: 'postagem-delete/:id', component: PostagemDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }