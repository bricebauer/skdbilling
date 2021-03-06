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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RIPurchaseHistoryV3Properties'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RIPurchaseHistoryV3Properties'));
  } else {
    // Browser globals (root is window)
    if (!root.EnterpriseReportingV3ApIsPreview) {
      root.EnterpriseReportingV3ApIsPreview = {};
    }
    root.EnterpriseReportingV3ApIsPreview.ReservedInstancesV3Api = factory(root.EnterpriseReportingV3ApIsPreview.ApiClient, root.EnterpriseReportingV3ApIsPreview.RIPurchaseHistoryV3Properties);
  }
}(this, function(ApiClient, RIPurchaseHistoryV3Properties) {
  'use strict';

  /**
   * ReservedInstancesV3 service.
   * @module api/ReservedInstancesV3Api
   * @version v3
   */

  /**
   * Constructs a new ReservedInstancesV3Api. 
   * @alias module:api/ReservedInstancesV3Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the reservedInstancesV3Get operation.
     * @callback module:api/ReservedInstancesV3Api~reservedInstancesV3GetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RIPurchaseHistoryV3Properties>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the reservation charges for the provided start and endDate
     * @param {String} authorization Specify the value in this format: \&quot;bearer {API_KEY}\&quot;
     * @param {String} enrollmentNumber The enrollment number
     * @param {Date} startDate 
     * @param {Date} endDate 
     * @param {module:api/ReservedInstancesV3Api~reservedInstancesV3GetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RIPurchaseHistoryV3Properties>}
     */
    this.reservedInstancesV3Get = function(authorization, enrollmentNumber, startDate, endDate, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling reservedInstancesV3Get");
      }

      // verify the required parameter 'enrollmentNumber' is set
      if (enrollmentNumber === undefined || enrollmentNumber === null) {
        throw new Error("Missing the required parameter 'enrollmentNumber' when calling reservedInstancesV3Get");
      }

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reservedInstancesV3Get");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reservedInstancesV3Get");
      }


      var pathParams = {
        'enrollmentNumber': enrollmentNumber
      };
      var queryParams = {
        'startDate': startDate,
        'endDate': endDate,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml'];
      var returnType = [RIPurchaseHistoryV3Properties];

      return this.apiClient.callApi(
        '/v3/enrollments/{enrollmentNumber}/reservationcharges', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
