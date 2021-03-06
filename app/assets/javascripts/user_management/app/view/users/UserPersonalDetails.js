/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 7:24 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.view.users.UserPersonalDetails',{
    extend: 'Ext.form.Panel',
    alias : 'widget.userPersonalDetails',
    itemId:'userPersonalDetailsMainFormId',
    defaults:{
       margin:'0 10 10 0'
    },
//    layout:{
//        type:'vbox',
//        align:'stretch'
//    },
//    autoScroll:true,
    items:[
        {
            xtype:'form',
            itemId:'userDetailsId',
            margin:'20 0 10 0',
            msgTarget:'side',
            border:0,
            defaults:{
               xtype:'textfield',
               flex:1,
               msgTarget:'side',
               allowBlank:false,
            },
            layout:{
                type:'hbox'
            },
            items:[
                {
                    fieldLabel: 'First Name',
                    itemId:'first_name_id',
                    name:'first_name',
                },
                {
                    fieldLabel: 'Last Name',
                    margin:"0 0 0 20",
                    name:'last_name',
                }
            ]
        },
        {
            xtype:'form',
            itemId:'userPersonalDetailsId',
            border:0,
            items:[
                {
                    xtype:'textfield',
                    fieldLabel:'Mobile Number',
                    name:'mobile_number',
                    msgTarget:'side',
                    allowBlank:false,
                },
                {
                    xtype      : 'fieldcontainer',
                    fieldLabel : 'Gender',
                    width:400,
                    defaultType: 'radiofield',
                    defaults: {
                        flex: 1
                    },
                    layout: 'hbox',
                    msgTarget:'side',
                    allowBlank:false,
                    items: [
                        {
                            boxLabel  : 'Male',
                            name      : 'gender',
                            inputValue: true,
                            id        : 'male'
                        },
                        {
                            boxLabel  : 'Female',
                            name      : 'gender',
                            inputValue: false,
                            id        : 'female',
                            selected:true
                        }
                    ]
                },
                {
                    xtype:'container',
                    fieldLabel : 'Photo',
                    items:[
                        {
                            xtype:'filefield',
                            name:'photo',
                            msgTarget:'side',
                            buttonText:'Select Photo',
                            width:330
                        },
//                {
//                    xtype:'filefield',
//                    name:'photo',
//                    msgTarget:'side',
//                    buttonText:'Select Photo',
//                    width:330
//                },
                    ]

                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Date Of Birth',
                    name: 'date_of_birth',
                    // The value matches the format; will be parsed and displayed using that format.
                    format: 'M d, Y',
                    value:'03-04-2012'
                },
                {
                    xtype:'fieldset',
                    title:'Address Details',
                    padding:'12 12 12 12',
                    margin:'10 10 10 10',
                    collapsible:true,
                    items:[
                        {
                            xtype:'textarea',
                            name:'address',
                            rows      : 5,
                            cols      : 40,
                            fieldLabel:'Address'
                        },
                        {
                            xtype:'textfield',
                            name:'state',
                            fieldLabel:'State'
                        },
                        {
                            xtype:'textfield',
                            name:'city',
                            fieldLabel:'City'
                        },
                        {
                            xtype:'textfield',
                            name:'country',
                            fieldLabel:'Country'
                        },
                        {
                            xtype:'textfield',
                            name:'pincode',
                            fieldLabel:'Pin Code'
                        },
                    ]
                },
            ]
        }
    ]

})