import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ExerciseDetailsForm extends Vue {
    @Prop() exercise: any;

    movementTypes = [
        { text: 'Main', value: 'Main' },
        { text: 'Assistance', value: 'Assistance' },
        { text: 'Accessory', value: 'Accessory' }
    ];

    options = [
        {
            value: 'Chest',
            name: 'chest'
        },
        {
            value: 'Traps',
            name: 'traps'
        },
        {
            value: 'Shoulders',
            name: 'shoulders'
        },
        {
            value: 'Triceps',
            name: 'triceps'
        }, {
            value: 'Biceps',
            name: 'biceps'
        }, {
            value: 'Back',
            name: 'back'
        },
        {
            value: 'Glutes',
            name: 'glutes'
        },
        {
            value: 'Adductors',
            name: 'adductors'
        },
        {
            value: 'Calves',
            name: 'calves'
        },
        {
            value: 'QL',
            name: 'ql'
        },
        {
            value: 'Hamstrings',
            name: 'hamstrings'
        },
        {
            value: 'Quads',
            name: 'quads'
        },
        {
            value: 'Abs',
            name: 'abs'
        },
        {
            value: 'SITS',
            name: 'sits'
        }
    ];

    onCancel() {
        this.$router.go(-1);
    }
}