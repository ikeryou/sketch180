import { Mouse } from "../core/mouse";
import { MyDisplay } from "../core/myDisplay";
import { Color } from 'three/src/math/Color';
import { Util } from "../libs/util";

// -----------------------------------------
//
// -----------------------------------------
export class Con extends MyDisplay {

  constructor(opt:any = {}) {
    super(opt)
  }


  // 更新
  _update():void {
    super._update()

    let mx = (Mouse.instance.easeNormal.x + 1) * 0.5
    let my = (Mouse.instance.easeNormal.y + 1) * 0.5

    const h = ~~(mx * 360)
    const l = ~~(Util.instance.map(my, 0.25, 0.75, 0, 1) * 100)
    const col = new Color('hsl(' + h + ', 100%, ' + l + '%)')

    console.log('%c_______________________________________________________________________', 'background-color:#' + col.getHexString())
  }
}