import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface IAssetRouterProps {
    AssetId: string;
}
interface IAssetProps extends RouteComponentProps<IAssetRouterProps> {

}
export default class Asset extends React.Component <IAssetProps>{
   constructor(props:IAssetProps) {
       super(props);
   }
   public render() {
       if(this.props.match.params.AssetId)
       {
        return (
            <div>
                 Asset page with Asset and : {this.props.match.params.AssetId} 
                </div>
        );
       }
       else
       {
        return (
                <div>
                  assetpage without assetid;
                </div>
        );
       }
      
   }
}