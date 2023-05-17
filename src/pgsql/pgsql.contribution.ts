/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
	diagnosticDefault,
	LanguageServiceDefaults,
	LanguageServiceDefaultsImpl,
	modeConfigurationDefault,
	registerLanguage
} from '../common/_.contribution';
import { languages } from '../fillers/monaco-editor-core';

const languageId = 'pgsql';

registerLanguage({
	id: languageId,
	extensions: [],
	aliases: ['PgSQL', 'pgsql'],
	loader: () => import('./pgsql')
});

const defaults: LanguageServiceDefaults = new LanguageServiceDefaultsImpl(
	languageId,
	diagnosticDefault,
	modeConfigurationDefault
);

languages.onLanguage(languageId, () => {
	import('../common/setupLanguageMode').then((mode) => mode.setupLanguageMode(defaults));
});
