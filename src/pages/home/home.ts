import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public  alertCtlr: AlertController) {}

  mostrarAlerta(){
    let alerta=this.alertCtlr.create({
      title:'Este es título',
      message:'este es el mensaje',
      inputs:[{
        name:'nombre',
        placeholder:'Escribe tu nombre'
      }],
      buttons:[{
        text:'Cancelar',
        handler:()=>{console.log('Cancelar')}
      },{
      text:'Guardar',
      handler:(data)=>{console.log(data.nombre);}
    }
    ]
    });
    alerta.present();
  }

  mostrarAlerta2(){
    let alerta=this.alertCtlr.create();
    alerta.setTitle('País de Origen' );

    alerta.addInput({
      type:'radio',
      label:'Argentina',
      value:'argentina'
    });
    alerta.addInput({
      type:'radio',
      label:'Brasil',
      value:'brasil'
    });
    alerta.addInput({
      type:'radio',
      label:'Colombia',
      value:'colombia'
    });
    alerta.addInput({
      type:'radio',
      label:'Venezuela',
      value:'venezuela'
    });

    alerta.addButton('Cancelar');
    alerta.addButton({
      text:'Guardar',
      handler:data=>{console.log('El País de Origen es: '+ data)}
    });



    alerta.present();

  }
  mostrarAlerta3(){
    let alerta=this.alertCtlr.create();
    alerta.setTitle('¿Qué paises has visitado?' );

    alerta.addInput({
      type:'checkbox',
      label:'Argentina',
      value:'argentina'
    });
    alerta.addInput({
      type:'checkbox',
      label:'Brasil',
      value:'brasil'
    });
    alerta.addInput({
      type:'checkbox',
      label:'Colombia',
      value:'colombia'
    });
    alerta.addInput({
      type:'checkbox',
      label:'Venezuela',
      value:'venezuela'
    });

    alerta.addButton('Cancelar');
    alerta.addButton({
      text:'Guardar',
      handler:data=>{console.log('Paises que se a visitado: '+ data)}
    });



    alerta.present();

  }
}
