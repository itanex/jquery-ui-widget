namespace ItxMedia {
    export interface ProgressBarOptions extends JQueryUI.WidgetOptions {
        /** Progress Bar Options :: Value */
        value: number;
    }

    export interface CustomProgressBar extends JQueryUI.WidgetInstance {
        /** Custom Progress Bar :: Options*/
        options: ProgressBarOptions;
    }

    // Define custom widget
    $.widget("custom.progressbar", {
        options: {
            value: 0
        },
        _create: function () {
            console.log('------------------------------');
            console.log('_create invoked');

            const progress = `${this.options.value}%`;
            console.log('_create options', this.options);
            console.log('_create element', this.element);

            this.element
                .addClass("itx-progressbar")

            this.element
                .append($(`<div></div>`));
            this.refresh();

            console.log('------------------------------');
        },

        _setOption: function (key: string, value: any) {
            console.log('------------------------------');
            console.log('_setOption invoked', key, value);

            if (key == "value") {
                value = this._constrain(value);
            }

            this._super(key, value);

            console.log('------------------------------');
        },

        _setOptions: function (options: object) {
            console.log('------------------------------');
            console.log('_setOptions invoked', options);

            this._super(options);
            this.refresh();

            console.log('------------------------------');
        },

        refresh: function () {
            console.log('------------------------------');
            console.log('refresh method invoked');

            const progress = `${this.options.value}%`;

            const child = this.element.find('div');

            child.text(progress);
            // child.css('width', progress)
            child.animate({ width: progress }, 1500)

            console.log('------------------------------');
        },

        // Create a public method.
        /** custom method */
        value: function (value: number) {
            console.log('------------------------------');
            console.log('value method invoked with', value);

            // No value passed, act as a getter.
            if (value === undefined) {
                return this.options.value;
            }

            // Value passed, act as a setter.
            this.options.value = this._constrain(value);

            this.refresh();
            console.log('------------------------------');
        },

        // Create a private method.
        _constrain: function (value: number) {
            console.log('------------------------------');
            console.log('_constrain invoked with', value);

            if (value > 100) {
                value = 100;
            }

            if (value < 0) {
                value = 0;
            }

            console.log('------------------------------');
            return value;
        }
    })

    function initialize(): JQuery {
        console.log('EXE_SPACE::Creating element and attaching widget');

        // Create an instance of the custom progressbar and attach it to the boddy
        const bar = $("<div></div>")
            .appendTo("body")
            .progressbar({ value: 20 })

        console.log('EXE_SPACE::bar object', bar);

        return bar;
    }

    function setValueMethod(bar: JQuery): JQuery {
        // Get the current value of bar's progressbar
        // using the custom 'value' method
        console.log('EXE_SPACE::Value method Invoke Attempt', bar.progressbar("value"));

        // Update the current value of bar's progressbar
        // using the custom 'value' method
        bar.progressbar("value", 50);

        // Get the current value of bar's progressbar
        // using the custom 'value' method
        console.log(`EXE_SPACE::Value method Invoke Attempt`, bar.progressbar("value"));

        return bar;
    }


    function setOptionMethod(bar: JQuery): JQuery {
        // invoke the standard '_setOption' method by sending a 
        // options hash collection
        bar.progressbar({ value: 30 })

        // Get the current value of bar's progressbar
        // using the custom 'value' method
        console.log(`EXE_SPACE::Options method Invoke Attempt`, bar.progressbar('option', "value"));

        return bar;
    }

    $(() => {
        const bar = initialize();
        setTimeout(() => {
            setValueMethod(bar);
            setTimeout(() => {
                setOptionMethod(bar);
            }, 2000);
        }, 2000);
    });
}