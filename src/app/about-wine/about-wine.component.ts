import { Component, OnInit } from '@angular/core';
import { wineCategories } from './wine-categories';

@Component({
  selector: 'app-about-wine',
  templateUrl: './about-wine.component.html',
  styleUrls: ['./about-wine.component.scss']
})
export class AboutWineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  wc: wineCategories[]=[
    {
      type: 'Cabernet',
      description: 'El cabernet ofrece un sabor balsámico, frutal, limpio y brillante ofreciendo una buena estructuración en la boca. La grosella negra y las moras resaltan en el paladar, además presenta una clara acidez',
    },
    {
      type: 'Malbec',
      description: 'La característica más sobresaliente del Malbec es su color oscuro intenso. Los aromas del Malbec recuerdan a cerezas, frutillas o ciruelas, pasas de uva y pimienta negra en algunos casos con reminiscencias de frutas cocidas (por ejemplo, mermelada), dependiendo de cuándo se haya realizado la cosecha.',
    },
    {
      type: 'Rosado',
      description: 'Es un vino intenso, de aromas frescos, con algunas notas cítricas y minerales perfectamente equilibradas con toques de frutos rojos, frambuesas y grosellas.',
    },
    {
      type: 'Blanco',
      description: 'El vino blanco se produce por la fermentación alcohólica de la pulpa no coloreada de uvas que pueden ser tanto blancas como negras, porque es el único vino que se puede elaborar con cualquier tipo de uva, con independencia de su color.',
    }
  ]

}
