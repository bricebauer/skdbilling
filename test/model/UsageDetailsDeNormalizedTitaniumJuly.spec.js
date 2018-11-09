/**
 * Enterprise Reporting v3 APIs (preview)
 * The Reporting APIs enable Enterprise Azure customers to programmatically pull consumption and billing data into preferred data analysis tools. Generate API Key on Enterprise portal and follow the tutorial under Help - Reporting APIs. The first section under this help article explains how to generate\\retrieve the API key for the specified enrollment. <a href=\"https://docs.microsoft.com/en-us/azure/billing/billing-enterprise-api\" data-linktype=\"external\">Billing Enterprise API official documentation</a>
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EnterpriseReportingV3ApIsPreview);
  }
}(this, function(expect, EnterpriseReportingV3ApIsPreview) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UsageDetailsDeNormalizedTitaniumJuly', function() {
    it('should create an instance of UsageDetailsDeNormalizedTitaniumJuly', function() {
      // uncomment below and update the code to test UsageDetailsDeNormalizedTitaniumJuly
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be.a(EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly);
    });

    it('should have the property serviceName (base name: "serviceName")', function() {
      // uncomment below and update the code to test the property serviceName
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property serviceTier (base name: "serviceTier")', function() {
      // uncomment below and update the code to test the property serviceTier
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property chargesBilledSeparately (base name: "chargesBilledSeparately")', function() {
      // uncomment below and update the code to test the property chargesBilledSeparately
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property partNumber (base name: "partNumber")', function() {
      // uncomment below and update the code to test the property partNumber
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property resourceGuid (base name: "resourceGuid")', function() {
      // uncomment below and update the code to test the property resourceGuid
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property offerId (base name: "offerId")', function() {
      // uncomment below and update the code to test the property offerId
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property cost (base name: "cost")', function() {
      // uncomment below and update the code to test the property cost
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property resourceLocationId (base name: "resourceLocationId")', function() {
      // uncomment below and update the code to test the property resourceLocationId
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property consumedServiceId (base name: "consumedServiceId")', function() {
      // uncomment below and update the code to test the property consumedServiceId
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property departmentId (base name: "departmentId")', function() {
      // uncomment below and update the code to test the property departmentId
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property accountOwnerEmail (base name: "accountOwnerEmail")', function() {
      // uncomment below and update the code to test the property accountOwnerEmail
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property accountName (base name: "accountName")', function() {
      // uncomment below and update the code to test the property accountName
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property serviceAdministratorId (base name: "serviceAdministratorId")', function() {
      // uncomment below and update the code to test the property serviceAdministratorId
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionId (base name: "subscriptionId")', function() {
      // uncomment below and update the code to test the property subscriptionId
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionGuid (base name: "subscriptionGuid")', function() {
      // uncomment below and update the code to test the property subscriptionGuid
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionName (base name: "subscriptionName")', function() {
      // uncomment below and update the code to test the property subscriptionName
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property product (base name: "product")', function() {
      // uncomment below and update the code to test the property product
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property meterId (base name: "meterId")', function() {
      // uncomment below and update the code to test the property meterId
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property meterCategory (base name: "meterCategory")', function() {
      // uncomment below and update the code to test the property meterCategory
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property meterSubCategory (base name: "meterSubCategory")', function() {
      // uncomment below and update the code to test the property meterSubCategory
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property meterRegion (base name: "meterRegion")', function() {
      // uncomment below and update the code to test the property meterRegion
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property meterName (base name: "meterName")', function() {
      // uncomment below and update the code to test the property meterName
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property consumedQuantity (base name: "consumedQuantity")', function() {
      // uncomment below and update the code to test the property consumedQuantity
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property resourceRate (base name: "resourceRate")', function() {
      // uncomment below and update the code to test the property resourceRate
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property resourceLocation (base name: "resourceLocation")', function() {
      // uncomment below and update the code to test the property resourceLocation
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property consumedService (base name: "consumedService")', function() {
      // uncomment below and update the code to test the property consumedService
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property instanceId (base name: "instanceId")', function() {
      // uncomment below and update the code to test the property instanceId
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property serviceInfo1 (base name: "serviceInfo1")', function() {
      // uncomment below and update the code to test the property serviceInfo1
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property serviceInfo2 (base name: "serviceInfo2")', function() {
      // uncomment below and update the code to test the property serviceInfo2
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property additionalInfo (base name: "additionalInfo")', function() {
      // uncomment below and update the code to test the property additionalInfo
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property storeServiceIdentifier (base name: "storeServiceIdentifier")', function() {
      // uncomment below and update the code to test the property storeServiceIdentifier
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property departmentName (base name: "departmentName")', function() {
      // uncomment below and update the code to test the property departmentName
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property costCenter (base name: "costCenter")', function() {
      // uncomment below and update the code to test the property costCenter
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property unitOfMeasure (base name: "unitOfMeasure")', function() {
      // uncomment below and update the code to test the property unitOfMeasure
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

    it('should have the property resourceGroup (base name: "resourceGroup")', function() {
      // uncomment below and update the code to test the property resourceGroup
      //var instane = new EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly();
      //expect(instance).to.be();
    });

  });

}));
