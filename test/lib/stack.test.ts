import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { OHPCWebsiteStack } from "../../lib/stack";

const app = new App();
let testStack: Stack;

beforeAll(() => {
  testStack = new OHPCWebsiteStack(app, 'TestStack', {});
});

test('OHPC website stack should create exactly these resources', () => {
  const template = Template.fromStack(testStack);
  template.resourceCountIs("AWS::IAM::Policy", 1);
  template.resourceCountIs("AWS::IAM::Role", 1);
  template.resourceCountIs("AWS::Lambda::Function", 1);
  template.resourceCountIs("AWS::Lambda::LayerVersion", 1);
  template.resourceCountIs("AWS::S3::Bucket", 1);
  template.resourceCountIs("AWS::S3::BucketPolicy", 1);
});
