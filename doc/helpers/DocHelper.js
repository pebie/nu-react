const DocHelper = {
   getDocHtml: ()=>{
       var result = '<pre class="editor editor-colors"><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>First&nbsp;line&nbsp;seems&nbsp;to&nbsp;be&nbsp;mandatory&nbsp;:(</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>Pebie&nbsp;made&nbsp;this&nbsp;code&nbsp;!</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source js"><span class="keyword control js"><span>import</span></span><span>&nbsp;loadersConfig&nbsp;from&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>./config/loaders</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span class="keyword control js"><span>import</span></span><span>&nbsp;pluginsConfig&nbsp;from&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>./config/plugins</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span class="keyword control js"><span>import</span></span><span>&nbsp;entryConfig&nbsp;from&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>./config/entry</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span class="keyword control js"><span>import</span></span><span>&nbsp;outputConfig&nbsp;from&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>./config/output</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span class="keyword control js"><span>import</span></span><span>&nbsp;resolveConfig&nbsp;from&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>./config/resolve</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>This&nbsp;is&nbsp;a&nbsp;documentation&nbsp;test</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source js"><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>With&nbsp;multiline&nbsp;support</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source js"><span class="support variable js"><span>module</span></span><span class="meta delimiter method period js"><span>.</span></span><span>exports&nbsp;</span><span class="keyword operator js"><span>=</span></span><span>&nbsp;</span><span class="meta brace round js"><span>(</span></span><span>options</span><span class="meta brace round js"><span>)</span></span><span class="keyword operator js"><span>=</span><span>&gt;</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="storage modifier js"><span>let</span></span><span>&nbsp;commonLoaders&nbsp;</span><span class="keyword operator js"><span>=</span></span><span>&nbsp;loadersConfig</span><span class="meta brace round js"><span>(</span><span>)</span></span><span class="meta delimiter method period js"><span>.</span></span><span>getCommons</span><span class="meta brace round js"><span>(</span></span><span>options</span><span class="meta brace round js"><span>)</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="storage modifier js"><span>let</span></span><span>&nbsp;stylesheetLoaders&nbsp;</span><span class="keyword operator js"><span>=</span></span><span>&nbsp;loadersConfig</span><span class="meta brace round js"><span>(</span><span>)</span></span><span class="meta delimiter method period js"><span>.</span></span><span>getStylesheets</span><span class="meta brace round js"><span>(</span></span><span>options</span><span class="meta brace round js"><span>)</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="storage modifier js"><span>let</span></span><span>&nbsp;imagesLoaders&nbsp;</span><span class="keyword operator js"><span>=</span></span><span>&nbsp;loadersConfig</span><span class="meta brace round js"><span>(</span><span>)</span></span><span class="meta delimiter method period js"><span>.</span></span><span>getImages</span><span class="meta brace round js"><span>(</span></span><span>options</span><span class="meta brace round js"><span>)</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="storage modifier js"><span>let</span></span><span>&nbsp;plugins&nbsp;</span><span class="keyword operator js"><span>=</span></span><span>&nbsp;pluginsConfig</span><span class="meta brace round js"><span>(</span><span>)</span></span><span class="meta delimiter method period js"><span>.</span></span><span>get</span><span class="meta brace round js"><span>(</span></span><span>options</span><span class="meta brace round js"><span>)</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="storage modifier js"><span>let</span></span><span>&nbsp;entry&nbsp;</span><span class="keyword operator js"><span>=</span></span><span>&nbsp;entryConfig</span><span class="meta brace round js"><span>(</span><span>)</span></span><span class="meta delimiter method period js"><span>.</span></span><span>get</span><span class="meta brace round js"><span>(</span></span><span>options</span><span class="meta brace round js"><span>)</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="storage modifier js"><span>let</span></span><span>&nbsp;output&nbsp;</span><span class="keyword operator js"><span>=</span></span><span>&nbsp;outputConfig</span><span class="meta brace round js"><span>(</span><span>)</span></span><span class="meta delimiter method period js"><span>.</span></span><span>get</span><span class="meta brace round js"><span>(</span></span><span>options</span><span class="meta brace round js"><span>)</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="storage modifier js"><span>let</span></span><span>&nbsp;resolve&nbsp;</span><span class="keyword operator js"><span>=</span></span><span>&nbsp;resolveConfig</span><span class="meta brace round js"><span>(</span><span>)</span></span><span class="meta delimiter method period js"><span>.</span></span><span>get</span><span class="meta brace round js"><span>(</span></span><span>options</span><span class="meta brace round js"><span>)</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span class="punctuation whitespace comment leading js"><span>&nbsp;&nbsp;</span></span><span class="comment line double-slash js"><span class="punctuation definition comment js"><span>//</span></span><span>One&nbsp;comment&nbsp;line</span><span>&nbsp;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="storage modifier js"><span>let</span></span><span>&nbsp;devServer&nbsp;</span><span class="keyword operator js"><span>=</span></span><span>&nbsp;</span><span class="meta brace round js"><span>(</span></span><span class="support variable js"><span>process</span></span><span class="meta delimiter method period js"><span>.</span></span><span>env</span><span class="meta delimiter method period js"><span>.</span></span><span>NODE_ENV&nbsp;</span><span class="keyword operator js"><span>===</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>production</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta brace round js"><span>)</span></span><span>&nbsp;</span><span class="keyword operator js"><span>?</span></span><span>&nbsp;null&nbsp;</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;contentBase</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>./tmp</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;historyApiFallback</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;</span><span class="constant language boolean true js"><span>true</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="keyword control js"><span>return</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;target</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>web</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;cache</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;</span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>&#39;</span></span><span>true</span><span class="punctuation definition string end js"><span>&#39;</span></span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;entry</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;entry</span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;resolve</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;resolve</span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;output</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;output</span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;module</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;</span><span class="meta brace curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loaders</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;commonLoaders</span><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>concat</span></span><span class="meta brace round js"><span>(</span></span><span>stylesheetLoaders</span><span class="meta brace round js"><span>)</span></span><span class="meta delimiter method period js"><span>.</span></span><span class="support function js"><span>concat</span></span><span class="meta brace round js"><span>(</span></span><span>imagesLoaders</span><span class="meta brace round js"><span>)</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;plugins</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;plugins</span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;debug</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;options</span><span class="meta delimiter method period js"><span>.</span></span><span>debug</span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;devtool</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;options</span><span class="meta delimiter method period js"><span>.</span></span><span>devtool</span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;&nbsp;&nbsp;devServer</span><span class="keyword operator js"><span>:</span></span><span>&nbsp;devServer</span></span></div><div class="line"><span class="source js"><span>&nbsp;&nbsp;</span><span class="meta brace curly js"><span>}</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span class="meta brace curly js"><span>}</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div></pre>'
       return result;
   }
};
export default DocHelper;