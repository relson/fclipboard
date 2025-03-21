/*global Ext:false, futil:false*/
Ext.define('Fclipboard.view.NumberInputView', {
    extend: 'Ext.Panel',
    xtype: 'numberinput',
    requires: [
        'Ext.Button',
        'Ext.Container',
        'Fclipboard.view.NumberView'
    ],
    config: {    
        layout: 'vbox', 
        
        firstReplace: true,
            
        handler: null,
        
        editHandler: null,
        
        hideOnMaskTap : true,
                
        modal: true,
        
        width: '336px',
        
        listeners: [
            {
                fn: 'addNumber',
                event: 'tap',
                delegate: 'button[action=addNumber]'
            },
            {
                fn: 'clearInput',
                event: 'tap',
                delegate: 'button[action=clearInput]'
            },
            {
                fn: 'changeSign',
                event: 'tap',
                delegate: 'button[action=changeSign]'                
            },
            {
                fn: 'addComma',
                event: 'tap',
                delegate: 'button[action=addComma]'
            },
            {
                fn: 'numInputDone',
                event: 'tap',
                delegate: 'button[action=numInputDone]'   
            },
            {
                fn: 'showInput',
                event: 'show'
            },
            {
                fn: 'hideInput',
                event: 'hide'
            },
            {
                fn: 'editDetail',
                event: 'tap',
                delegate: 'numberview'
            }
                
        ], 
        items: [
            {   
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'numberview',
                        flex: 1
                    }                
                ]      
                
            },
            {
                xtype: 'container',
                layout: 'vbox',
                cls: 'NumInputContainer',
                items: [
                    {
                        layout: 'hbox',
                        items: [
                            {                                
                                xtype: 'button',
                                text: '7',
                                width: '72px',
                                height: '66px',
                                ui: 'numInputButtonBlack',
                                cls: 'NumInputButton',
                                action: 'addNumber'
                                
                            },
                            {
                                xtype: 'button',
                                text: '8',
                                width: '72px',
                                height: '66px',
                                ui: 'numInputButtonBlack',
                                cls: 'NumInputButton',
                                action: 'addNumber'                                
                            },
                            {
                                xtype: 'button',
                                text: '9',
                                width: '72px',
                                height: '66px',          
                                ui: 'numInputButtonBlack',                      
                                cls: 'NumInputButton',
                                action: 'addNumber'
                            }, 
                            {
                                xtype: 'button',
                                text: 'CE',
                                width: '80px',
                                height: '66px',          
                                ui: 'numInputButtonRed',                      
                                cls: 'NumInputButton',
                                action: 'clearInput'
                            }
                        ]                    
                    },
                    {
                        layout: 'hbox',
                        items: [
                            {                                
                                xtype: 'button',
                                text: '4',
                                width: '72px',
                                height: '66px',
                                ui: 'numInputButtonBlack',
                                cls: 'NumInputButton',
                                action: 'addNumber'
                            },
                            {
                                xtype: 'button',
                                text: '5',
                                width: '72px',
                                height: '66px',
                                ui: 'numInputButtonBlack',
                                cls: 'NumInputButton',
                                action: 'addNumber'
                            },
                            {
                                xtype: 'button',
                                text: '6',
                                width: '72px',
                                height: '66px',          
                                ui: 'numInputButtonBlack',                      
                                cls: 'NumInputButton',
                                action: 'addNumber'
                            }, 
                            {
                                xtype: 'button',
                                text: '+/-',
                                width: '72px',
                                height: '66px',          
                                ui: 'numInputButtonBlack',                      
                                cls: 'NumInputButton',
                                action: 'changeSign'
                            }
                        ]                    
                    },
                    {
                        layout: 'hbox',
                        items: [
                            {
                                layout: 'vbox',
                                items: [
                                    {
                                        layout: 'hbox',
                                        items: [
                                            {                                
                                                xtype: 'button',
                                                text: '1',
                                                width: '72px',
                                                height: '66px',
                                                ui: 'numInputButtonBlack',
                                                cls: 'NumInputButton',
                                                action: 'addNumber'
                                            },
                                            {
                                                xtype: 'button',
                                                text: '2',
                                                width: '72px',
                                                height: '66px',
                                                ui: 'numInputButtonBlack',
                                                cls: 'NumInputButton',
                                                action: 'addNumber'
                                            },
                                            {
                                                xtype: 'button',
                                                text: '3',
                                                width: '72px',
                                                height: '66px',          
                                                ui: 'numInputButtonBlack',                      
                                                cls: 'NumInputButton',
                                                action: 'addNumber'
                                            } 
                                        ]                                
                                    },
                                    {
                                        layout: 'hbox',
                                        items:  [
                                            {                                
                                                xtype: 'button',
                                                text: '0',
                                                width: '148px',
                                                height: '66px',
                                                ui: 'numInputButtonBlack',
                                                cls: 'NumInputButton',
                                                action: 'addNumber'
                                            },
                                            {
                                                xtype: 'button',
                                                text: '.',
                                                width: '72px',
                                                height: '66px',
                                                ui: 'numInputButtonBlack',
                                                cls: 'NumInputButton',
                                                action: 'addComma'
                                            }
                                        ]
                                    }
                                ]                                                            
                            },
                            {
                                xtype: 'button',
                                text: '=',
                                width: '72px',
                                height: '136px',
                                ui: 'numInputButtonBlack',
                                cls: 'NumInputButton',
                                action: 'numInputDone'
                            }
                        
                        ]
                    }          
                ]
                
            }
        
        
        ]
    },
    
    
    initialize: function() {
         var self = this;
         self.callParent(arguments);
         self.numField = self.query('numberview')[0];     
    },
    
    addComma: function() {
        var val = this.numField.getValue();
        if ( val && val.indexOf(futil.comma) !== -1 ) {
            return;
        }
        val+=futil.comma;
        this.numField.setValue(val);
    },
    
    addNumber: function(button) {
        var val = this.numField.getValue();
        if ( !val || this.getFirstReplace() || val=='0' ) {
            this.setFirstReplace(false);
            val = '';
        }
        val+=button.getText();   
        this.numField.setValue(val);
    },
    
    setValue: function(val) {
        this.numField.setValue(futil.formatFloat(val,0));
        return val;
    },
    
    getValue: function(val) {
        return futil.parseFloat(this.numField.getValue());
    },
    
    clearInput: function() {
        this.setValue(0.0);
    },
    
    changeSign: function() {
        var val = this.getValue();
        val=val*-1.0;
        this.setValue(val);
    },
    
    numInputDone: function() {
        try {        
            var handler = this.getHandler();
            if ( handler ) {
                handler(this, this.getValue());
            }
        } finally {
            this.hide();
        }
    },
    
    showInput: function()  {
        this.visible=true;
        this.setFirstReplace(true);     
    },    
    
    hideInput: function() {
        if ( this.visible ) {
            this.visible=false;
            this.setHandler(null);
        }
    },
    
    showBy: function(component, alignment, animation, value, handler, editHandler) {
        var self = this;
        
        if ( !value ) {
            value = 0.0;
        }
        
        self.setValue(value);        
        self.setHandler(handler);
        self.setEditHandler(editHandler);
    
        // call parent        
        var successful = false;
        try {
            self.callParent(arguments);
            successful = true;
        } finally {
            if (!successful) {
                self.setHandler(null); 
            }
        }
    },
    
    editDetail: function() {
        try {        
            var handler = this.getEditHandler();
            if ( handler ) {
                handler(this, this.getValue());
            }
        } finally {
            this.hide();
        }
    }
});

