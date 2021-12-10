/* eslint-disable import/prefer-default-export */
import { SQSEvent } from 'aws-lambda';

import * as AuditLogModel from './models/AuditLog';

export async function handler(event: SQSEvent): Promise<{ message: string }> {
  event.Records.forEach(async (record) => {
    const { body } = record;
    const data = JSON.parse(body);

    await AuditLogModel.create(data);
  });

  return {
    message: 'Log added successfully',
  };
}

// handler({
//   Records: [
//     {
//       messageId: '059f36b4-87a3-44ab-83d2-661975830a7d',
//       receiptHandle: 'AQEBwJnKyrHigUMZj6rYigCgxlaS3SLy0a...',
//       body: '{"logType":"CREATE","oldValue":null,"newValue":{"id":123,"field1":"test","field2":"another test","createdAt":"2021-12-09T06:09:54.149Z","updatedAt":"2021-12-09T06:09:54.149Z"},"createdBy":{"id":145,"firstName":"John","lastName":"Doe"}}',
//       attributes: {
//         ApproximateReceiveCount: '1',
//         SentTimestamp: '1545082649183',
//         SenderId: 'AIDAIENQZJOLO23YVJ4VO',
//         ApproximateFirstReceiveTimestamp: '1545082649185',
//       },
//       messageAttributes: {},
//       md5OfBody: '098f6bcd4621d373cade4e832627b4f6',
//       eventSource: 'aws:sqs',
//       eventSourceARN: 'arn:aws:sqs:us-east-2:123456789012:my-queue',
//       awsRegion: 'us-east-2',
//     },
//   ],
// });

// handler({
//   Records: [
//     {
//       messageId: '059f36b4-87a3-44ab-83d2-661975830a7d',
//       receiptHandle: 'AQEBwJnKyrHigUMZj6rYigCgxlaS3SLy0a...',
//       body: '{"logType":"CREATE","oldValue":null,"newValue":{"id":124,"field1":"test","field2":"another test","createdAt":"2021-12-09T06:09:54.149Z","updatedAt":"2021-12-09T06:09:54.149Z"},"createdBy":{"id":125,"firstName":"Jenny","lastName":"Doe"}}',
//       attributes: {
//         ApproximateReceiveCount: '1',
//         SentTimestamp: '1545082649183',
//         SenderId: 'AIDAIENQZJOLO23YVJ4VO',
//         ApproximateFirstReceiveTimestamp: '1545082649185',
//       },
//       messageAttributes: {},
//       md5OfBody: '098f6bcd4621d373cade4e832627b4f6',
//       eventSource: 'aws:sqs',
//       eventSourceARN: 'arn:aws:sqs:us-east-2:123456789012:my-queue',
//       awsRegion: 'us-east-2',
//     },
//   ],
// });

// handler({
//   Records: [
//     {
//       messageId: '059f36b4-87a3-44ab-83d2-661975830afd',
//       receiptHandle: 'AQEBwJnKyrHigUMZj6rYigCgxlaS3SLy0a...',
//       body: '{"logType":"UPDATE","oldValue":{"id":123,"field1":"test","field2":"another test","createdAt":"2021-12-09T06:09:54.149Z","updatedAt":"2021-12-09T06:09:54.149Z"},"newValue":{"id":123,"field1":"test v2","field2":"another test v2","createdAt":"2021-12-09T06:09:54.149Z","updatedAt":"2021-12-09T06:10:54.149Z"},"createdBy":{"id":125,"firstName":"Jenny","lastName":"Doe"}}',
//       attributes: {
//         ApproximateReceiveCount: '1',
//         SentTimestamp: '1545082649183',
//         SenderId: 'AIDAIENQZJOLO23YVJ4VO',
//         ApproximateFirstReceiveTimestamp: '1545082649185',
//       },
//       messageAttributes: {},
//       md5OfBody: '098f6bcd4621d373cade4e832627b4f6',
//       eventSource: 'aws:sqs',
//       eventSourceARN: 'arn:aws:sqs:us-east-2:123456789012:my-queue',
//       awsRegion: 'us-east-2',
//     },
//   ],
// });

// handler({
//   Records: [
//     {
//       messageId: '059f36b4-87a3-44ab-83d2-661975830afd',
//       receiptHandle: 'AQEBwJnKyrHigUMZj6rYigCgxlaS3SLy0a...',
//       body: '{"logType":"UPDATE","oldValue":{"id":124,"field1":"test","field2":"another test","createdAt":"2021-12-09T06:09:54.149Z","updatedAt":"2021-12-09T06:09:54.149Z"},"newValue":{"id":124,"field1":"test v2","field2":"another test v2","createdAt":"2021-12-09T06:09:54.149Z","updatedAt":"2021-12-09T06:10:54.149Z"},"createdBy":{"id":125,"firstName":"Jenny","lastName":"Doe"}}',
//       attributes: {
//         ApproximateReceiveCount: '1',
//         SentTimestamp: '1545082649183',
//         SenderId: 'AIDAIENQZJOLO23YVJ4VO',
//         ApproximateFirstReceiveTimestamp: '1545082649185',
//       },
//       messageAttributes: {},
//       md5OfBody: '098f6bcd4621d373cade4e832627b4f6',
//       eventSource: 'aws:sqs',
//       eventSourceARN: 'arn:aws:sqs:us-east-2:123456789012:my-queue',
//       awsRegion: 'us-east-2',
//     },
//   ],
// });
