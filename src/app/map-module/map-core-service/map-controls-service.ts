import { defaults, Control, Attribution, MousePosition } from 'ol/control';
import Collection from 'ol/Collection';

export class MapControlsService {

  private defaultControls: Collection<Control> | null = null;
  private static serviceInstance: MapControlsService | null = null;

  private constructor() {}

  public static getInstance(): MapControlsService {
    if (this.serviceInstance === null) this.serviceInstance = new MapControlsService;
    return this.serviceInstance;
  }

  public getDefaultControls(): Collection<Control> | null {
    if (this.defaultControls === null) this.initDefaultControls();
    return this.defaultControls;
  }

  private initDefaultControls() {
    this.defaultControls = defaults({ attribution: false, rotate: false, zoomOptions: { className: "zoom-default-control" } });
    this.defaultControls.push(new MousePosition());
  }
}  