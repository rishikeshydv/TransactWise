
import { FinicityConnect, ConnectEventHandlers, ConnectOptions, ConnectDoneEvent, ConnectCancelEvent, ConnectErrorEvent, ConnectRouteEvent } from '@finicity/connect-web-sdk';

const connectURL = 'replace with your generated connect url';

const connectEventHandlers: ConnectEventHandlers = {
    onDone: (event: ConnectDoneEvent) => { console.log(event); },
    onCancel: (event: ConnectCancelEvent) => { console.log(event); },
    onError: (event: ConnectErrorEvent) => { console.log(event); },
    onRoute: (event: ConnectRouteEvent) => { console.log(event); },
    onUser: (event: any) => { console.log(event); },
    onLoad: () => { console.log('loaded'); }
  };

  const connectOptions: ConnectOptions = {
    overlay: 'rgba(199,201,199, 0.5)'
  };

  FinicityConnect.launch(
    connectURL,
    connectEventHandlers,
    connectOptions
    );

// When you are finished with the Connect application don't forget to destroy it using the following call:
// FinicityConnect.destroy()