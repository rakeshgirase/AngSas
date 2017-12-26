import {Injectable, OnInit} from "@angular/core";
import * as connectivity from "tns-core-modules/connectivity";

/**
 * Created by rakesh on 15-Nov-2017.
 */

@Injectable()
export class ConnectionService {

    static connected: boolean;

    constructor(){
        connectivity.startMonitoring(function onConnectionTypeChanged(newConnectionType: number) {
            switch (newConnectionType) {
                case connectivity.connectionType.none:
                    ConnectionService.connected = false;
                    break;
                case connectivity.connectionType.wifi:
                    ConnectionService.connected = true;
                    break;
                case connectivity.connectionType.mobile:
                    ConnectionService.connected = true;
                    break;
            }
        });
    }



    isConnected(): boolean {
        return ConnectionService.connected;
    }
}
