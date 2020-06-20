import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ExerciseLibrarySideNav from '@/components/exercise-library/exercise-side-nav/ExerciseLibrarySideNav.vue';
import ExerciseLibraryCard from '@/components/exercise-library/exercise-library-card/ExerciseLibraryCard.vue';

@Component({
    components: {
        ExerciseLibrarySideNav,
        ExerciseLibraryCard
    }
})
export default class ExerciseLibrary extends Vue {
    exercises = [
        {
            id: 0,
            name: 'Overhead Press',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 1,
            name: 'Bench Press',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 2,
            name: 'Squat',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 3,
            name: 'Front Squat',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 4,
            name: 'Hamstring Curl',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 5,
            name: 'French Press',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 6,
            name: 'Deadlift',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ];

    async onClick(exercise: any) {
        await this.$router.push({ name: 'exercise-details.view', params: { exerciseName: exercise.name, exercise } });
    }
}