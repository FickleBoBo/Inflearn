package collection.deque.test;

import collection.deque.test.queue.BackupTask;
import collection.deque.test.queue.CleanTask;
import collection.deque.test.queue.CompressionTask;
import collection.deque.test.queue.TaskScheduler;

public class SchedulerTest {
    public static void main(String[] args) {
        TaskScheduler scheduler = new TaskScheduler();
        scheduler.addTask(new CompressionTask());
        scheduler.addTask(new BackupTask());
        scheduler.addTask(new CleanTask());

        System.out.println("작업 시작");
        run(scheduler);
        System.out.println("작업 완료");
    }

    private static void run(TaskScheduler scheduler){
        while(scheduler.getRemainingTasks() > 0){
            scheduler.processNextTask();
        }
    }
}
