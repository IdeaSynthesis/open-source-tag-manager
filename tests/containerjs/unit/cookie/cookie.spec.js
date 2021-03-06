/**
 * Copyright (C) 2015 Digimedia Sp. z.o.o. d/b/a Clearcode
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

describe('Unit: cookie', function () {

    var cookie;

    beforeEach(function () {
        cookie = window.sevenTag.$injector.get('$cookie');
    });

    it('should be defined', function () {
        expect(cookie).toBeDefined();
    });

    it('should add cookie', function () {
        cookie.add('TEST_COOKIE', "some_value");

        expect(cookie.get('TEST_COOKIE')).toBe('some_value')
    });


});
