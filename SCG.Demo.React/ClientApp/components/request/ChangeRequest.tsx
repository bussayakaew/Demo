import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { RequesterInfo } from './RequesterInfo';
import { InitialData } from './InitialData';

export class ChangeRequest extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
          <RequesterInfo />
          <InitialData />
        </div>;
    }
}
