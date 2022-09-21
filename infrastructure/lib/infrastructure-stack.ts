import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SPADeploy } from 'cdk-spa-deploy';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SPADeploy(this, 'spaDeploy')
      .createBasicSite({
        indexDoc: 'index.html',
        websiteFolder: '../dist/space-launch-tracker'
      });
  }
}
