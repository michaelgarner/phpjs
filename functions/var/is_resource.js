function is_resource (handle) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // *     example 1: is_resource('a');
    // *     returns 1: false

    if (!handle || typeof handle !== 'object' || handle.constructor !== 'PHPJS_Resource') {
        return false;
    }

    return true;
}