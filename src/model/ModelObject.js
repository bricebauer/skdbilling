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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EnterpriseReportingV3ApIsPreview) {
      root.EnterpriseReportingV3ApIsPreview = {};
    }
    root.EnterpriseReportingV3ApIsPreview.ModelObject = factory(root.EnterpriseReportingV3ApIsPreview.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelObject model module.
   * @module model/ModelObject
   * @version v3
   */

  /**
   * Constructs a new <code>ModelObject</code>.
   * @alias module:model/ModelObject
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ModelObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelObject} obj Optional instance to populate.
   * @return {module:model/ModelObject} The populated <code>ModelObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


