import { RemovalPolicy, Stack } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";

export class Website {

  bucket: Bucket;
  deployment: BucketDeployment;

  constructor(scope: Stack, appName: string) {

    this.bucket = new Bucket(scope, `${appName}-bucket`, {
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,        
      websiteIndexDocument: "index.html"
   });
   this.deployment = new BucketDeployment(scope, `${appName}-bucket-deployment`, {
      destinationBucket: this.bucket,
      sources: [Source.asset('src/website')]
   });
  }
}